/**
 * Particles background — adapted from React Bits (MIT)
 * @see https://reactbits.dev/backgrounds/particles
 * @see https://github.com/DavidHDev/react-bits/tree/main/src/ts-tailwind/Backgrounds/Particles
 */
import React, { useEffect, useRef, useState } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

/**
 * Particle palettes aligned with site tokens (`styles.css`) + hero art:
 * accent teal #14b8a6, muted slate grays, occasional brighter teal sparks.
 */
const LIGHT_PARTICLE_PALETTE = [
	"#0f766e",
	"#115e59",
	"#134e4a",
	"#14b8a6",
	"#0d9488",
	"#475569",
	"#64748b",
];

const DARK_PARTICLE_PALETTE = [
	"#14b8a6",
	"#2dd4bf",
	"#5eead4",
	"#99f6e4",
	"#cbd5e1",
	"#94a3b8",
	"#e2e8f0",
];

function readThemeKey() {
	if (typeof document === "undefined") return "light";
	return document.body.classList.contains("dark-theme") ? "dark" : "light";
}

function paletteForTheme(themeKey) {
	return themeKey === "dark" ? DARK_PARTICLE_PALETTE : LIGHT_PARTICLE_PALETTE;
}

const hexToRgb = (hex) => {
	let h = hex.replace(/^#/, "");
	if (h.length === 3) {
		h = h
			.split("")
			.map((c) => c + c)
			.join("");
	}
	const int = parseInt(h, 16);
	const r = ((int >> 16) & 255) / 255;
	const g = ((int >> 8) & 255) / 255;
	const b = (int & 255) / 255;
	return [r, g, b];
};

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vRandom = random;
    vColor = color;
    
    vec3 pos = position * uSpread;
    pos.z *= 10.0;
    
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    
    vec4 mvPos = viewMatrix * mPos;

    if (uSizeRandomness == 0.0) {
      gl_PointSize = uBaseSize;
    } else {
      gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    }
    
    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  
  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    
    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
    }
  }
`;

function ParticlesBackground({
	particleCount = 200,
	particleSpread = 10,
	speed = 0.1,
	particleColors,
	moveParticlesOnHover = false,
	particleHoverFactor = 1,
	alphaParticles = false,
	particleBaseSize = 100,
	sizeRandomness = 1,
	cameraDistance = 20,
	disableRotation = false,
	pixelRatio = 1,
	className = "",
}) {
	const containerRef = useRef(null);
	const mouseRef = useRef({ x: 0, y: 0 });
	const [allowMotion, setAllowMotion] = useState(true);
	const [themeKey, setThemeKey] = useState(readThemeKey);

	useEffect(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const apply = () => setAllowMotion(!mq.matches);
		apply();
		mq.addEventListener("change", apply);
		return () => mq.removeEventListener("change", apply);
	}, []);

	useEffect(() => {
		const sync = () => {
			const next = readThemeKey();
			setThemeKey((k) => (k === next ? k : next));
		};
		const obs = new MutationObserver(sync);
		obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
		sync();
		return () => obs.disconnect();
	}, []);

	useEffect(() => {
		if (!allowMotion) return;
		const container = containerRef.current;
		if (!container) return;

		let disposed = false;
		let rafId = 0;

		const renderer = new Renderer({ dpr: pixelRatio, depth: false, alpha: true });
		const gl = renderer.gl;
		const canvas = gl.canvas;
		canvas.style.display = "block";
		canvas.style.width = "100%";
		canvas.style.height = "100%";
		container.appendChild(canvas);
		gl.clearColor(0, 0, 0, 0);

		const camera = new Camera(gl, { fov: 15 });
		camera.position.set(0, 0, cameraDistance);

		const resize = () => {
			const width = Math.max(1, container.clientWidth);
			const height = Math.max(1, container.clientHeight);
			renderer.setSize(width, height);
			const aspect = gl.canvas.width / gl.canvas.height;
			if (Number.isFinite(aspect) && aspect > 0) {
				camera.perspective({ aspect });
			}
		};
		window.addEventListener("resize", resize, false);
		const ro =
			typeof ResizeObserver !== "undefined"
				? new ResizeObserver(() => {
						if (!disposed) resize();
					})
				: null;
		if (ro) ro.observe(container);
		resize();

		const handleMouseMove = (e) => {
			const rect = container.getBoundingClientRect();
			const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
			const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
			mouseRef.current = { x, y };
		};

		if (moveParticlesOnHover) {
			container.addEventListener("mousemove", handleMouseMove);
		}

		const count = particleCount;
		const positions = new Float32Array(count * 3);
		const randoms = new Float32Array(count * 4);
		const colors = new Float32Array(count * 3);
		const palette = particleColors?.length ? particleColors : paletteForTheme(themeKey);

		for (let i = 0; i < count; i++) {
			let x;
			let y;
			let z;
			let len;
			do {
				x = Math.random() * 2 - 1;
				y = Math.random() * 2 - 1;
				z = Math.random() * 2 - 1;
				len = x * x + y * y + z * z;
			} while (len > 1 || len === 0);
			const r = Math.cbrt(Math.random());
			positions.set([x * r, y * r, z * r], i * 3);
			randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
			const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
			colors.set(col, i * 3);
		}

		const geometry = new Geometry(gl, {
			position: { size: 3, data: positions },
			random: { size: 4, data: randoms },
			color: { size: 3, data: colors },
		});

		const program = new Program(gl, {
			vertex,
			fragment,
			uniforms: {
				uTime: { value: 0 },
				uSpread: { value: particleSpread },
				uBaseSize: { value: particleBaseSize * pixelRatio },
				uSizeRandomness: { value: sizeRandomness },
				uAlphaParticles: { value: alphaParticles ? 1 : 0 },
			},
			transparent: true,
			depthTest: false,
		});

		const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

		let lastTime = performance.now();
		let elapsed = 0;

		const update = (t) => {
			if (disposed) return;
			rafId = requestAnimationFrame(update);
			const delta = t - lastTime;
			lastTime = t;
			elapsed += delta * speed;

			program.uniforms.uTime.value = elapsed * 0.001;

			if (moveParticlesOnHover) {
				particles.position.x = -mouseRef.current.x * particleHoverFactor;
				particles.position.y = -mouseRef.current.y * particleHoverFactor;
			} else {
				particles.position.x = 0;
				particles.position.y = 0;
			}

			if (!disableRotation) {
				particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
				particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
				particles.rotation.z += 0.01 * speed;
			}

			renderer.render({ scene: particles, camera });
		};

		rafId = requestAnimationFrame(update);

		return () => {
			disposed = true;
			cancelAnimationFrame(rafId);
			window.removeEventListener("resize", resize);
			if (ro) ro.disconnect();
			if (moveParticlesOnHover) {
				container.removeEventListener("mousemove", handleMouseMove);
			}
			if (container.contains(canvas)) {
				container.removeChild(canvas);
			}
		};
	}, [
		allowMotion,
		themeKey,
		particleCount,
		particleSpread,
		speed,
		moveParticlesOnHover,
		particleHoverFactor,
		alphaParticles,
		particleBaseSize,
		sizeRandomness,
		cameraDistance,
		disableRotation,
		pixelRatio,
		particleColors,
	]);

	if (!allowMotion) {
		return null;
	}

	return (
		<div
			ref={containerRef}
			className={`particles-bg-host ${className}`.trim()}
		/>
	);
}

export default ParticlesBackground;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, useMemo } from "react";
import ParticlesBackground from "./component/ui/ParticlesBackground.jsx";

const Homepage = lazy(() => import("./pages/homepage"));
const About = lazy(() => import("./pages/about"));
const Projects = lazy(() => import("./pages/projects"));
const Achievements = lazy(() => import("./pages/achievements"));
const Contact = lazy(() => import("./pages/contact"));
const Notfound = lazy(() => import("./pages/404"));

import "./App.css";

function App() {
	const particleDpr = useMemo(
		() => (typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1),
		[]
	);

	return (
		<Router>
			<div className="App">
				<div className="app-particles-layer" aria-hidden>
					<ParticlesBackground
						particleCount={500}
						particleSpread={20}
						speed={0.10}
						alphaParticles={false}
						particleBaseSize={130}
						sizeRandomness={1}
						cameraDistance={50}
						pixelRatio={particleDpr}
					/>
				</div>
				<div className="app-main-layer">
					<Suspense fallback={<div className="app-route-fallback">Loading…</div>}>
						<Routes>
							<Route path="/" element={<Homepage />} />
							<Route path="/about" element={<About />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/achievements" element={<Achievements />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="*" element={<Notfound />} />
						</Routes>
					</Suspense>
				</div>
			</div>
		</Router>
	);
}

export default App;

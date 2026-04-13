import React, { useEffect, useRef, useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../component/common/NavBar";
import Footer from "../component/common/Footer";
import Logo from "../component/common/Logo";
import Modal from "../component/ui/Modal";
import "../component/projects/styles/project.css";
import INFO from "../data/User";
import {
	ACHIEVEMENT_IMAGE_FILES,
	HACKATHONS,
	RECOGNITIONS,
	CERTIFICATIONS,
	WORK_SNAPSHOTS,
	ADDITIONAL_STRENGTHS,
} from "../data/achievementsContent";

import "./styles/achievements.css";

function SmartImage({ src, alt, className, onActivate }) {
	const [loaded, setLoaded] = useState(true);

	const handleError = useCallback(() => {
		setLoaded(false);
	}, []);

	if (!loaded) {
		return (
			<button
				type="button"
				className="achievements-image-placeholder"
				onClick={onActivate}
				disabled={!onActivate}
			>
				<span className="achievements-image-placeholder-title">Image not found</span>
				<span className="achievements-image-placeholder-hint">
					Add <code>{src.replace(/^\//, "")}</code> under <code>public/</code>
				</span>
			</button>
		);
	}

	return (
		<button
			type="button"
			className="achievements-image-button"
			onClick={onActivate}
			aria-label={alt ? `Enlarge: ${alt}` : "Enlarge image"}
		>
			<img
				src={src}
				alt={alt}
				className={className}
				onError={handleError}
				loading="lazy"
			/>
		</button>
	);
}

function SnapshotSlideshow({ imageSources, title, onOpen }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const total = imageSources.length;
	const canSlide = total > 1;
	const activeSrc = imageSources[activeIndex];

	const goPrev = useCallback(() => {
		setActiveIndex((prev) => (prev - 1 + total) % total);
	}, [total]);

	const goNext = useCallback(() => {
		setActiveIndex((prev) => (prev + 1) % total);
	}, [total]);

	useEffect(() => {
		setActiveIndex(0);
	}, [title]);

	if (!total) {
		return null;
	}

	return (
		<div className="snapshot-slideshow">
			<div className="snapshot-slideshow-main">
				<SmartImage
					src={activeSrc}
					alt={`${title} preview ${activeIndex + 1}`}
					className="snapshot-card-image"
					onActivate={() => onOpen(activeSrc, `${title} preview ${activeIndex + 1}`)}
				/>
				{canSlide && (
					<div className="snapshot-slideshow-controls">
						<button
							type="button"
							className="snapshot-nav-btn"
							onClick={goPrev}
							aria-label="Previous slide"
						>
							‹
						</button>
						<button
							type="button"
							className="snapshot-nav-btn"
							onClick={goNext}
							aria-label="Next slide"
						>
							›
						</button>
					</div>
				)}
			</div>
			{canSlide && (
				<div className="snapshot-dots" role="tablist" aria-label={`${title} image slides`}>
					{imageSources.map((src, idx) => (
						<button
							key={`${src}-${idx}`}
							type="button"
							className={`snapshot-dot ${idx === activeIndex ? "active" : ""}`}
							onClick={() => setActiveIndex(idx)}
							aria-label={`Go to slide ${idx + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
}

const Achievements = () => {
	const [visibleItems, setVisibleItems] = useState(new Set());
	const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });
	const timelineRefs = useRef([]);
	const observerRef = useRef(null);

	const openLightbox = useCallback((src, alt) => {
		if (!src) return;
		setLightbox({ open: true, src, alt });
	}, []);

	const closeLightbox = useCallback(() => {
		setLightbox((s) => ({ ...s, open: false }));
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);

		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = parseInt(entry.target.dataset.index, 10);
						setVisibleItems((prev) => new Set([...prev, index]));
					}
				});
			},
			{
				threshold: 0.2,
				rootMargin: "0px 0px -40px 0px",
			}
		);

		timelineRefs.current.forEach((ref) => {
			if (ref) observerRef.current.observe(ref);
		});

		return () => {
			if (observerRef.current) observerRef.current.disconnect();
		};
	}, []);

	const currentSEO = {
		description:
			"Hackathons, certifications, LeetCode recognition, and product snapshots from real projects.",
		keywords: [
			"achievements",
			"certifications",
			"hackathon",
			"portfolio",
			"Sudhan",
		],
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Achievements | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content achievements-page">
				<NavBar active="achievements" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="achievements-container">
						<div className="title achievements-title">
							Achievements & certifications
						</div>
						<p className="subtitle achievements-subtitle">
							Hackathons, credentials, platform recognition, and visuals from
							products I have helped ship — laid out as a story, not a generic
							grid.
						</p>

						<section className="achievements-section" aria-labelledby="hackathons-heading">
							<h2 id="hackathons-heading" className="achievements-section-title">
								Hackathons & competitions
							</h2>
							<p className="achievements-section-lead">
								High-intensity builds where scope, speed, and teamwork mattered
								just as much as the code.
							</p>

							<div className="timeline">
								{HACKATHONS.map((item, idx) => (
									<div
										className={`timeline-item ${visibleItems.has(idx) ? "animate-in" : ""}`}
										key={item.title}
										data-index={idx}
										ref={(el) => {
											timelineRefs.current[idx] = el;
										}}
										style={{ animationDelay: `${idx * 0.08}s` }}
									>
										<div className="timeline-dot" />
										<div className="timeline-card">
											<div className="timeline-meta">
												<span className="timeline-year">{item.year}</span>
												<span className="timeline-badge">{item.badge}</span>
											</div>
											<div className="timeline-title">{item.title}</div>
											<div className="timeline-desc">{item.desc}</div>
										</div>
									</div>
								))}
							</div>
						</section>

						<section className="achievements-section" aria-labelledby="recognition-heading">
							<h2 id="recognition-heading" className="achievements-section-title">
								Platform recognition
							</h2>
							{RECOGNITIONS.map((r) => {
								const src = ACHIEVEMENT_IMAGE_FILES[r.imageKey];
								return (
									<article key={r.title} className="recognition-spotlight">
										<div className="recognition-spotlight-glow" aria-hidden />
										<div className="recognition-spotlight-body">
											<div className="recognition-spotlight-text">
												<p className="recognition-issuer">{r.issuer}</p>
												<h3 className="recognition-title">{r.title}</h3>
												<p className="recognition-detail">{r.detail}</p>
											</div>
											<div className="recognition-spotlight-visual">
												<SmartImage
													src={src}
													alt={r.title}
													className="recognition-image"
													onActivate={() => openLightbox(src, r.title)}
												/>
											</div>
										</div>
									</article>
								);
							})}
						</section>

						<section className="achievements-section" aria-labelledby="certs-heading">
							<h2 id="certs-heading" className="achievements-section-title">
								Certifications
							</h2>
							<p className="achievements-section-lead">
								Each credential is paired with its artwork. Tap an image to view
								it full size.
							</p>

							<div className="cert-rows">
								{CERTIFICATIONS.map((c, i) => {
									const src = ACHIEVEMENT_IMAGE_FILES[c.imageKey];
									const reverse = i % 2 === 1;
									return (
										<article
											key={`${c.title}-${c.issuer}`}
											className={`cert-row cert-row--${c.accent} ${reverse ? "cert-row--reverse" : ""}`}
										>
											<div className="cert-row-copy">
												<p className="cert-row-issuer">{c.issuer}</p>
												<h3 className="cert-row-title">{c.title}</h3>
												<p className="cert-row-detail">{c.detail}</p>
											</div>
											<div className="cert-row-frame">
												<SmartImage
													src={src}
													alt={`${c.title} certificate`}
													className="cert-row-image"
													onActivate={() => openLightbox(src, c.title)}
												/>
											</div>
										</article>
									);
								})}
							</div>
						</section>

						<section className="achievements-section" aria-labelledby="snapshots-heading">
							<h2 id="snapshots-heading" className="achievements-section-title">
								Product snapshots
							</h2>
							<p className="achievements-section-lead">
								UI captures from Lumina Write (hackathon) and the ATH sales
								intelligence platform (freelance frontend).
							</p>

							<div className="snapshot-stack">
								{WORK_SNAPSHOTS.map((w, index) => {
									const imageSources = (w.imageKeys || [])
										.map((key) => ACHIEVEMENT_IMAGE_FILES[key])
										.filter(Boolean);
									const featured = index === 0;
									return (
										<article
											key={w.title}
											className={`snapshot-card ${featured ? "snapshot-card--featured" : "snapshot-card--compact"}`}
										>
											<div className="snapshot-card-copy">
												<h3 className="snapshot-card-title">{w.title}</h3>
												<p className="snapshot-card-sub">{w.subtitle}</p>
												<p className="snapshot-card-desc">{w.desc}</p>
											</div>
											<div className="snapshot-card-visual">
												<SnapshotSlideshow
													imageSources={imageSources}
													title={w.title}
													onOpen={openLightbox}
												/>
											</div>
										</article>
									);
								})}
							</div>
						</section>

						<section className="achievements-section" aria-labelledby="strengths-heading">
							<h2 id="strengths-heading" className="achievements-section-title">
								Additional strengths
							</h2>
							<ul className="strength-pills" role="list">
								{ADDITIONAL_STRENGTHS.map((text) => (
									<li key={text} className="strength-pill">
										{text}
									</li>
								))}
							</ul>
						</section>
					</div>

					<Modal open={lightbox.open} onClose={closeLightbox}>
						<div className="achievements-lightbox-inner">
							<img src={lightbox.src} alt={lightbox.alt} className="achievements-lightbox-img" />
							<p className="achievements-lightbox-caption">{lightbox.alt}</p>
						</div>
					</Modal>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Achievements;

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../component/common/NavBar";
import Footer from "../component/common/Footer";
import Logo from "../component/common/Logo";
import Socials from "../component/about/social";

import INFO from "../data/User";
import SEO from "../data/Seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content contact-page">
				<NavBar active="contact" />
				<div className="content-wrapper contact-page-inner">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<header className="contact-hero">
						<p className="contact-hero-kicker">Contact</p>
						<h1 className="contact-hero-title">Let&apos;s build something together</h1>
						<p className="contact-hero-lead">
							Collaborations, freelance work, or a quick technical chat — I usually reply within a
							day when schedules allow.
						</p>
					</header>

					<div className="contact-actions">
						<a
							className="contact-cta contact-cta--primary"
							href={`mailto:${INFO.main.email}`}
						>
							<span className="contact-cta-label">Email</span>
							<span className="contact-cta-value">{INFO.main.email}</span>
						</a>
						<a
							className="contact-cta contact-cta--secondary"
							href={INFO.socials.linkedin}
							target="_blank"
							rel="noreferrer"
						>
							<span className="contact-cta-label">LinkedIn</span>
							<span className="contact-cta-value">Profile &amp; messages</span>
						</a>
					</div>

					{INFO.main.phone && (
						<section className="contact-phone-section" aria-labelledby="phone-heading">
							<h2 id="phone-heading" className="contact-phone-heading">
								Mobile
							</h2>
							<p className="contact-phone-lead">Call or WhatsApp — tap the number on your phone.</p>
							<a
								className="contact-phone-number"
								href={`tel:${String(INFO.main.phone).replace(/\s/g, "")}`}
							>
								{INFO.main.phone}
							</a>
						</section>
					)}

					<section className="contact-panel" aria-labelledby="more-heading">
						<h2 id="more-heading" className="contact-panel-title">
							Also on
						</h2>
						<p className="contact-panel-lead">
							GitHub, LeetCode, GeeksforGeeks, Docker Hub — same handle where it applies.
						</p>
						<div className="contact-socials-wrap">
							<Socials />
						</div>
					</section>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;

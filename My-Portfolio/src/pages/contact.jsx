import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../component/common/NavBar";
import Footer from "../component/common/Footer";
import Logo from "../component/common/Logo";
import Socials from "../component/about/social";

import INFO from "../data/user";
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
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">Let’s Connect and Collaborate!</div>

						<div className="subtitle contact-subtitle">
							I love meeting new people, exchanging ideas, and working on exciting projects. Whether you’re interested in collaborating on a project, networking, or just having a conversation about tech, I’d love to hear from you!
							<br />
							<br />
							The best way to reach me is via email at{" "}
							<a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. Whether it’s a question, feedback, or an opportunity to work together, I make an effort to respond within 24 hours whenever possible. Let’s start a conversation!
							<br />
							<br />
							Let’s connect on{" "}
							<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
								LinkedIn
							</a>
							! I actively engage with the developer community, share updates on my latest projects, and discuss industry trends. If you’re looking to collaborate, network, or just have a tech-related chat, feel free to send me a message.
							<br />
							<br />
							I’m always open to collaborating on interesting projects and contributing to open-source initiatives. If you have a great idea or are working on something innovative, let’s team up and bring it to life!
							<br />
							<br />
							I believe in the power of shared learning and building meaningful connections. If you’d like to work together, discuss opportunities, or exchange insights, feel free to reach out. Looking forward to connecting and creating something impactful together! 🚀
						</div>
					</div>


					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;

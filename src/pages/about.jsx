import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../component/common/NavBar";
import Footer from "../component/common/Footer";
import Logo from "../component/common/Logo";
import Socials from "../component/about/social";

import INFO from "../data/User";
import SEO from "../data/Seo";

import "./styles/about.css";

const WHAT_I_DO = [
	"Build full-stack apps with React / Next.js and Spring Boot / Node.js",
	"Ship secure REST APIs with JWT, RBAC, and BCrypt",
	"Model data in PostgreSQL, MongoDB, and Redis for scale",
	"Containerize services with Docker and Docker Compose",
	"Polish UI with Tailwind CSS and responsive layouts",
];

const SKILL_GROUPS = [
	{
		title: "System design",
		tags: [
			"System design",
			"Design patterns",
			"Microservices",
			"OOP",
			"DSA",
		],
	},
	{
		title: "UI / UX",
		tags: ["Figma", "Adobe XD", "Canva", "Wireframing", "Prototyping", "Responsive layout"],
	},
	{
		title: "Frontend",
		tags: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind", "Bootstrap"],
	},
	{
		title: "Backend",
		tags: [
			"Java",
			"Python",
			"C++",
			"Spring Boot",
			"Node.js",
			"Express",
			"Spring MVC",
			"JPA / Hibernate",
			"REST APIs",
			"Spring Security",
			"Multithreading",
		],
	},
	{
		title: "Data",
		tags: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "JDBC"],
	},
	{
		title: "Integration",
		tags: ["REST", "Microservices", "Postman", "Swagger"],
	},
	{
		title: "Testing",
		tags: ["JUnit", "Mockito", "Exception handling", "Postman"],
	},
	{
		title: "DevOps",
		tags: ["Docker", "Docker Compose", "Git / GitHub", "Maven / Gradle", "CI/CD"],
	},
	{
		title: "Hosting",
		tags: ["Render", "Vercel", "AWS", "Docker"],
	},
];

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content about-page">
				<NavBar active="about" />
				<div className="content-wrapper about-page-inner">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<header className="about-hero">
						<p className="about-hero-kicker">About</p>
						<h1 className="about-hero-title">{INFO.about.title}</h1>
						<p className="about-hero-lead">
							Focused on fast, secure, and scalable systems — from API design to polished UI.
						</p>
					</header>

					<div className="about-layout">
						<aside className="about-aside" aria-label="Profile and links">
							<div className="about-profile-card">
								<div className="about-profile-frame">
									<img src="about.jpg" alt={INFO.main.name} className="about-profile-img" />
								</div>
								<p className="about-profile-caption">{INFO.main.name}</p>
							</div>
							<div className="about-social-card">
								<h2 className="about-card-heading">Connect</h2>
								<Socials />
							</div>
						</aside>

						<div className="about-main-col">
							<section className="about-section-card" aria-labelledby="intro-heading">
								<h2 id="intro-heading" className="about-section-title">
									Intro
								</h2>
								<div className="about-prose">
									<p>
										I build with <strong>React</strong>, <strong>Next.js</strong>,{" "}
										<strong>Spring Boot</strong>, <strong>Node.js</strong>, and databases
										including <strong>PostgreSQL</strong>, <strong>MongoDB</strong>,{" "}
										<strong>MySQL</strong>, and <strong>Redis</strong>.
									</p>
									<p>
										I enjoy turning real problems into <strong>clean</strong>,{" "}
										<strong>efficient</strong>, and <strong>production-ready</strong> software.
									</p>
								</div>
							</section>

							<section className="about-section-card" aria-labelledby="what-heading">
								<h2 id="what-heading" className="about-section-title">
									What I do
								</h2>
								<ul className="about-do-list">
									{WHAT_I_DO.map((line) => (
										<li key={line} className="about-do-item">
											<span className="about-do-icon" aria-hidden>
												<svg viewBox="0 0 20 20" width="18" height="18" fill="none">
													<circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.2" />
													<path
														d="M6 10.2l2.5 2.3L14 7.5"
														stroke="currentColor"
														strokeWidth="1.4"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</span>
											<span>{line}</span>
										</li>
									))}
								</ul>
							</section>

							<section className="about-section-card" aria-labelledby="skills-heading">
								<h2 id="skills-heading" className="about-section-title">
									Technical skills
								</h2>
								<p className="about-section-lead">
									Grouped by area — tap-friendly chips on small screens.
								</p>
								<div className="about-skill-grid">
									{SKILL_GROUPS.map((group) => (
										<article key={group.title} className="about-skill-card">
											<h3 className="about-skill-card-title">{group.title}</h3>
											<div className="about-skill-tags">
												{group.tags.map((tag) => (
													<span key={tag} className="about-skill-chip">
														{tag}
													</span>
												))}
											</div>
										</article>
									))}
								</div>
							</section>

							<section className="about-section-card about-section-card--accent" aria-labelledby="work-heading">
								<h2 id="work-heading" className="about-section-title">
									How I work
								</h2>
								<div className="about-prose">
									<p>
										I follow <strong>clean architecture</strong>, write{" "}
										<strong>maintainable code</strong>, and prioritize{" "}
										<strong>performance</strong> and <strong>security</strong>.
									</p>
									<p className="about-pullquote">
										Always learning. Always improving. Always shipping meaningful work.
									</p>
								</div>
							</section>
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

export default About;

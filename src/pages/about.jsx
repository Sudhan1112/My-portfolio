import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../component/common/NavBar";
import Footer from "../component/common/Footer";
import Logo from "../component/common/Logo";
import Socials from "../component/about/social";

import INFO from "../data/User";
import SEO from "../data/Seo";

import "./styles/about.css";

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
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								{/* Directly adding descriptions with appropriate HTML tags */}
								<div className="subtitle about-subtitle">
									<p>
										I'm a <strong>full-stack</strong> and <strong>Java backend developer</strong> who builds
										<strong> fast</strong>, <strong>secure</strong>, and <strong>scalable</strong> applications.
										I work with <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Spring Boot</strong>,
										<strong>Node.js</strong>, and databases like <strong>PostgreSQL</strong>,
										<strong>MongoDB</strong>, <strong>MySQL</strong>, and <strong>Redis</strong>.
									</p>

									<p>
										I enjoy turning real problems into <strong>clean</strong>, <strong>efficient</strong>, and
										<strong>production-ready software</strong>.
									</p>
								</div>

								<div className="subtitle about-subtitle">
									<h2>What I Do</h2>

									✔ <strong>Build full-stack apps</strong> with React/Next.js & Spring Boot/Node.js <br />
									✔ Create <strong>secure REST APIs</strong> with JWT, RBAC & BCrypt <br />
									✔ Design <strong>scalable PostgreSQL & MongoDB databases</strong> <br />
									✔ Containerize apps using <strong>Docker & Docker Compose</strong> <br />
									✔ Build responsive UI with <strong>Tailwind CSS</strong> <br />
								</div>

								<div className="subtitle about-subtitle">
									<h2>Technical Skills</h2>

									<div className="skills-phases">
										<div className="phase-item">
											<span className="phase-number">1.</span>
											<span className="phase-title">System Design</span>
											<span className="phase-separator">—</span>
											<span className="phase-skills">
												<strong>System Design</strong>, <strong>Design Patterns</strong>, <strong>Microservices Architecture</strong>, <strong>OOP</strong>, <strong>Data Structures & Algorithms</strong>
											</span>
										</div>

										<div className="phase-item">
											<span className="phase-number">2.</span>
											<span className="phase-title">UI/UX Prototyping</span>
											<span className="phase-separator">—</span>
											<span className="phase-skills">
												<strong>Figma</strong>, <strong>Adobe XD</strong>, <strong>Canva</strong>, <strong>Wireframing</strong>, <strong>Prototyping</strong>, <strong>Responsive Layout Design</strong>
											</span>
										</div>

										<div className="phase-item">
											<span className="phase-number">3.</span>
											<span className="phase-title">Frontend Development</span>
											<span className="phase-separator">—</span>
											<span className="phase-skills">
												<strong>React.js</strong>, <strong>Next.js</strong>, <strong>JavaScript</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>
											</span>
										</div>

										<div className="phase-item">
											<span className="phase-number">4.</span>
											<span className="phase-title">Backend Development</span>
											<span className="phase-separator">—</span>
											<span className="phase-skills">
												<strong>Java</strong>, <strong>Python</strong>, <strong>C++</strong>, <strong>Spring Boot</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>Spring MVC</strong>, <strong>Spring Data JPA</strong>, <strong>Hibernate ORM</strong>, <strong>RESTful APIs</strong>, <strong>Spring Security</strong>, <strong>Multithreading</strong>
											</span>
										</div>

										<div className="phase-item">
											<span className="phase-number">5.</span>
											<span className="phase-title">Database</span>
											<span className="phase-separator">—</span>
											<span className="phase-skills">
												<strong>MongoDB</strong>, <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>Redis</strong>, <strong>JDBC</strong>
											</span>
										</div>

										<div className="phase-item">
											<span className="phase-number">6.</span>
											<span className="phase-title">Integration</span>
											<span className="phase-separator">—</span>
											<span className="phase-skills">
												<strong>RESTful APIs</strong>, <strong>Microservices</strong>, <strong>Spring Boot</strong>, <strong>Express.js</strong>, <strong>Postman</strong>, <strong>Swagger</strong>
											</span>
										</div>

										<div className="phase-item">
											<span className="phase-number">7.</span>
											<span className="phase-title">Testing</span>
											<span className="phase-separator">—</span>
											<span className="phase-skills">
												<strong>JUnit</strong>, <strong>Mockito</strong>, <strong>Exception Handling</strong>, <strong>Postman</strong>
											</span>
										</div>

										<div className="phase-item">
											<span className="phase-number">8.</span>
											<span className="phase-title">DevOps</span>
											<span className="phase-separator">—</span>
											<span className="phase-skills">
												<strong>Docker</strong>, <strong>Docker Compose</strong>, <strong>Git & GitHub</strong>, <strong>Maven/Gradle</strong>, <strong>CI/CD</strong>
											</span>
										</div>

										<div className="phase-item">
											<span className="phase-number">9.</span>
											<span className="phase-title">Deployment & Hosting</span>
											<span className="phase-separator">—</span>
											<span className="phase-skills">
												<strong>Render</strong>, <strong>Vercel</strong>, <strong>AWS</strong>, <strong>Docker</strong>
											</span>
										</div>
									</div>
								</div>

								<div className="subtitle about-subtitle">
									<h2>How I Work</h2>
									<p>
										I follow <strong>clean architecture</strong>, write <strong>maintainable code</strong>, and
										build systems with <strong>performance</strong> and <strong>security</strong> as top priorities.
									</p>
									<p>
										<strong>Always learning. Always improving. Always shipping meaningful work.</strong>
									</p>
								</div>


							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
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

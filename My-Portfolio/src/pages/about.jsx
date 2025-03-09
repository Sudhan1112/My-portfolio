import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../component/common/NavBar";
import Footer from "../component/common/Footer";
import Logo from "../component/common/Logo";
import Socials from "../component/about/social";

import INFO from "../data/user";
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
										I am a full-stack web developer passionate about building scalable, secure, and high-performance web applications.
									</p>
									<p>
										My expertise spans frontend development with <strong>React.js, HTML5, CSS3, and JavaScript</strong>, and backend development using <strong>Node.js, Express.js, MongoDB, and MySQL</strong>.
									</p>
								</div>

								<div className="subtitle about-subtitle">
									<h2>What I Do</h2>
									<ul>
										<li>✅ Developing full-stack applications with a clean, maintainable codebase.</li>
										<li>✅ Building RESTful APIs for seamless data communication.</li>
										<li>✅ Optimizing databases for performance and scalability.</li>
										<li>✅ Enhancing user experience with responsive and interactive UIs.</li>
									</ul>
								</div>

								<div className="subtitle about-subtitle">
									<h2>My Skills</h2>
										🔹 <strong>Programming Languages:</strong> C++, Python, Java, JavaScript
										<br/>
										🔹 <strong>Frontend:</strong> React.js, HTML5, CSS3, JavaScript, Tailwind CSS, Redux
										<br/>
										🔹 <strong>Backend:</strong> Node.js, Express.js
										<br/>
										🔹 <strong>Databases:</strong> MongoDB, MySQL
										<br/>
										🔹 <strong>Version Control:</strong> Git, GitHub
										<br/>
								</div>

								<div className="subtitle about-subtitle">
									<h2>My Approach</h2>
									<p>
										I thrive on problem-solving, continuously learning new technologies, and writing efficient and scalable code.
									</p>
									<p>
										My foundation in <strong>Object-Oriented Programming, Data Structures & Algorithms, and software architecture</strong> ensures I deliver high-quality solutions that meet industry standards.
									</p>
									<p style={{ fontWeight: "bold", color: "#007bff" }}>
										🚀 Let’s build something amazing together!
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
						{/* <div className="about-socials-mobile">
							<Socials />
						</div> */}
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

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../component/common/NavBar";
import Footer from "../component/common/Footer";
import Logo from "../component/common/Logo";
import AllProjects from "../component/projects/AllProjects";

import INFO from "../data/User";
import SEO from "../data/Seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Creating Meaningful and Impactful Solutions
						</div>

						<div className="subtitle projects-subtitle">
							I have developed a variety of projects aimed at solving real-world challenges while adhering to best practices in <strong>full-stack development</strong> and <strong>DevOps practices</strong>. Many of these projects are <strong>encouraging exploration</strong>, <strong>learning</strong>, and <strong>collaboration</strong>.
							<br />
							By leveraging <b>React.js</b>, <b>HTML5</b>, <b>CSS3</b>, and <b>JavaScript</b> for seamless user experiences and <b>Node.js</b>, <b>Express.js</b>, <b>FastAPI</b>, <b>MongoDB</b>, <b>MySQL</b>, and <b>Redis</b> for building scalable, secure backend solutions, I focus on crafting efficient and maintainable applications. Additionally, I implement <b>Docker containerization</b> and <b>Firebase integration</b> to enhance deployment and scalability.
							<br />
							If any of my projects interest you, feel free to explore the code, share your thoughts, or contribute. I believe innovation thrives through collaboration, and I’m always eager to learn, improve, and build something extraordinary together!
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;

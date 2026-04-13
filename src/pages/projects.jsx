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
	const totalProjects = INFO.projects?.length || 0;
	const primaryStacks = ["React.js", "Next.js", "Node.js", "TypeScript", "Docker"];

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
						<div className="projects-hero">
							<div className="title projects-title">
								Projects that solve real product problems
							</div>

							<div className="subtitle projects-subtitle">
								A curated set of full-stack builds across SaaS dashboards,
								collaboration tools, and business workflows. Each project is
								designed for usability, scalability, and production-minded
								engineering.
							</div>

							<div className="projects-highlights">
								<div className="projects-highlight-card">
									<div className="projects-highlight-value">{totalProjects}+</div>
									<div className="projects-highlight-label">Projects shipped</div>
								</div>
								<div className="projects-highlight-card">
									<div className="projects-highlight-value">Full-stack</div>
									<div className="projects-highlight-label">Delivery focus</div>
								</div>
								<div className="projects-highlight-card">
									<div className="projects-highlight-value">Modern</div>
									<div className="projects-highlight-label">Tooling and DevOps</div>
								</div>
							</div>

							<div className="projects-tech-tags">
								{primaryStacks.map((stack) => (
									<span key={stack} className="projects-tech-tag">
										{stack}
									</span>
								))}
							</div>
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

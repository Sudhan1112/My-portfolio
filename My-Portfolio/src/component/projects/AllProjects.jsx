import React from "react";

import Project from "./Project";

import INFO from "../../data/User";

import "./styles/allProjects.css";

const AllProjects = () => {
	console.log(INFO.INFO);
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;

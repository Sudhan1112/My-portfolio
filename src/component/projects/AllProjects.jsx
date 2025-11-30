import React from "react";

import Project from "./Project";
import { getAllProjects } from "../../data/services/projectsService";

import "./styles/allProjects.css";

const AllProjects = () => {
	const projects = getAllProjects();
	return (
		<div className="all-projects-container">
			{projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						techStack={project.techStack}
						problemSolved={project.problemSolved}
						features={project.features}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;

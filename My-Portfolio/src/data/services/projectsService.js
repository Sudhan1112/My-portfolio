import INFO from "../User";
import Project from "../models/Project";

export function getAllProjects() {
  return INFO.projects.map(p => new Project(p));
}

export function findProjectByTitle(title) {
  return getAllProjects().find(p => p.title === title) || null;
}


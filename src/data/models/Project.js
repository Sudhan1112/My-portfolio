export default class Project {
  constructor({ title, description, linkText, link, techStack = [], problemSolved, features = [], logo }) {
    this.title = title;
    this.description = description;
    this.linkText = linkText || "View Project";
    this.link = link;
    this.techStack = techStack;
    this.problemSolved = problemSolved;
    this.features = features;
    this.logo = logo;
  }

  get primaryTechNames() {
    return this.techStack.slice(0, 4).map(t => t.name);
  }
}


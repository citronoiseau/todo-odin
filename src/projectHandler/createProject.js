import showProject from "../dom/showProjects";
import projectDialogHandler from "./handleProjectDialog";
import { updateOptions } from "../dom/taskDialog";
import handleActiveLink from "../handleActiveLink";
import { updateAllLinks } from "..";

class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  static fromObject(obj) {
    return new Project(obj.title, obj.description);
  }
  editProject() {
    projectDialogHandler(true, this);
    saveProjectsToLocalStorage();
  }
  deleteProject() {
    const confirmed = window.confirm(
      "Are you sure you want to remove this book?"
    );
    if (confirmed) {
      const position = projects.indexOf(this);
      projects.splice(position, 1);
      showProject();
      updateAllLinks();
      updateOptions();
      saveProjectsToLocalStorage();
    }
  }
  getDescription() {
    return this.description;
  }
}

const storedProjects = localStorage.getItem("projects");
export const projects = storedProjects
  ? JSON.parse(storedProjects).map(Project.fromObject)
  : [];

export default function createProject(title, description) {
  let newProject = new Project(title, description);
  projects.push(newProject);
  showProject();
  updateAllLinks();
  updateOptions();
  handleActiveLink();
  saveProjectsToLocalStorage();
}

function createDefaultProjects() {
  if (projects.length === 0) {
    const defaultProject = new Project(
      "Programming",
      "fix bugs, create new projects, repeat "
    );
    const secondDefaultProject = new Project("Home");

    projects.push(defaultProject);
    projects.push(secondDefaultProject);
    saveProjectsToLocalStorage();
  }
}
createDefaultProjects();
function saveProjectsToLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

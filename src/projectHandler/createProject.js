import showProject from "../dom/showProjects";
import projectDialogHandler from "./handleProjectDialog";
import { updateOptions } from "../dom/taskDialog";
import handleActiveLink from "../handleActiveLink";
import { updateAllLinks } from "..";

export const projects = [];

class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
  editProject() {
    projectDialogHandler(true, this);
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
    }
  }
  getDescription() {
    return this.description;
  }
}
export default function createProject(title, description) {
  let newProject = new Project(title, description);
  projects.push(newProject);
  showProject();
  updateAllLinks();
  updateOptions();
  handleActiveLink();
}

const defaultProject = new Project(
  "Programming",
  "fixing bugs in the todo app"
);
projects.push(defaultProject);

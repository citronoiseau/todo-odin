import createSideBar from "./dom/sidebar";
import createMain from "./dom/main";
import createTaskDialog from "./dom/taskDialog";
import handleActiveLink from "./handleActiveLink";
import createProjectDialog from "./dom/projectDialog";
import showProject from "./dom/showProjects";
import setupMobileHandler from "./mobileHandler";

export default function pageLoader() {
  createSideBar();
  createMain();
  handleActiveLink();
  createTaskDialog();
  createProjectDialog();
  showProject();
  setupMobileHandler();
}

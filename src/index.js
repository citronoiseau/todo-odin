import "./style.css";
import pageLoader from "./pageLoader";
import taskDialogHandler from "./taskHandler/handleTaskDialog";
import projectDialogHandler from "./projectHandler/handleProjectDialog";
import handleActiveLink from "./handleActiveLink";

pageLoader();

const createTaskBtns = document.querySelectorAll(".addTaskBtn");
const createProjectBtn = document.querySelector(".addProjectBtn");

createTaskBtns.forEach((createTaskBtn) => {
  createTaskBtn.addEventListener("click", () => {
    taskDialogHandler(false, null);
  });
});

createProjectBtn.addEventListener("click", () => {
  projectDialogHandler();
});

const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".link");
const projectList = document.querySelector(".projectList");
const projectLinks = document.querySelectorAll(".projectLink");
let allLinks = [...links, ...projectLinks];
export function updateAllLinks() {
  allLinks = [
    ...navbar.querySelectorAll(".navbar"),
    ...projectList.querySelectorAll(".projectLink"),
  ];

  allLinks.forEach((link) => {
    link.removeEventListener("click", handleLinkClick);
  });

  allLinks.forEach((link) => {
    link.addEventListener("click", handleLinkClick);
  });
}

function handleLinkClick() {
  allLinks.forEach((link) => {
    link.classList.remove("active");
  });
  this.classList.add("active");
  handleActiveLink();
}

allLinks.forEach((link) => {
  link.addEventListener("click", handleLinkClick);
});

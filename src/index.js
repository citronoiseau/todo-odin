import "./style.css";
import pageLoader from "./pageLoader";
import taskDialogHandler from "./taskHandler/handleTaskDialog";
import projectDialogHandler from "./projectHandler/handleProjectDialog";
import handleActiveLink from "./handleActiveLink";

pageLoader();

const inbox = document.querySelector("#inbox");
const today = document.querySelector("#today");
const upcoming = document.querySelector("#upcoming");
const createTaskBtns = document.querySelectorAll(".addTaskBtn");

const createProjectBtn = document.querySelector(".addProjectBtn");
const projectList = document.querySelector(".projectList");
const projectLinks = document.querySelectorAll(".projectLink");
let allLinks = [inbox, today, upcoming, ...projectLinks];

createTaskBtns.forEach((createTaskBtn) => {
  createTaskBtn.addEventListener("click", () => {
    taskDialogHandler(false, null);
  });
});

createProjectBtn.addEventListener("click", (event) => {
  projectDialogHandler();
});

export function updateAllLinks() {
  allLinks = [
    inbox,
    today,
    upcoming,
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

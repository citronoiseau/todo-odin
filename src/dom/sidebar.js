import inboxIcon from "../icons/inbox.svg";
import todayIcon from "../icons/today.svg";
import upcomingIcon from "../icons/calendar.svg";
import completedIcon from "../icons/completed.svg";

export default function createSideBar() {
  const content = document.querySelector("#content");

  const sideBarContainer = document.createElement("div");
  sideBarContainer.id = "sidebar";
  content.appendChild(sideBarContainer);

  const logo = document.createElement("h1");
  logo.textContent = "D O I T";
  sideBarContainer.appendChild(logo);

  const taskBtnContainer = document.createElement("div");
  taskBtnContainer.classList.add("btnContainer");
  sideBarContainer.appendChild(taskBtnContainer);

  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("addTaskBtn");
  addTaskBtn.textContent = "Add task";
  taskBtnContainer.appendChild(addTaskBtn);

  const navbar = document.createElement("ul");
  navbar.classList.add("navbar");
  sideBarContainer.appendChild(navbar);

  const inboxLink = createLink("Inbox", navbar, "inbox", "link", inboxIcon);
  inboxLink.classList.add("active");
  const todayLink = createLink("Today", navbar, "today", "link", todayIcon);
  const upcomingLink = createLink(
    "Upcoming",
    navbar,
    "upcoming",
    "link",
    upcomingIcon
  );
  const completedLink = createLink(
    "Completed",
    navbar,
    "completed",
    "link",
    completedIcon
  );
  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("projects");
  sideBarContainer.appendChild(projectsContainer);

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = "Projects:";
  projectsContainer.appendChild(projectTitle);

  const projectList = document.createElement("ul");
  projectList.classList.add("projectList");
  projectsContainer.appendChild(projectList);

  const projectBtnContainer = document.createElement("div");
  projectBtnContainer.classList.add("btnContainer");
  projectsContainer.appendChild(projectBtnContainer);

  const addProjectBtn = document.createElement("button");
  addProjectBtn.textContent = "Add project";
  addProjectBtn.classList.add("addProjectBtn");
  projectBtnContainer.appendChild(addProjectBtn);

  const footerContainer = document.createElement("div");
  const message = document.createElement("div");
  message.textContent = "by ";
  const authorLink = document.createElement("a");
  authorLink.textContent = "lemonbirdy";
  authorLink.href = "https://github.com/citronoiseau/todo-odin";
  authorLink.target = "_blank";
  footerContainer.appendChild(message);
  message.appendChild(authorLink);
  sideBarContainer.appendChild(footerContainer);
}

function createLink(text, parent, id, linkClass, iconSvg) {
  const link = document.createElement("li");
  link.id = id;
  link.classList.add(linkClass);
  const iconContainer = document.createElement("span");
  const icon = document.createElement("img");
  icon.src = iconSvg;
  icon.alt = text;
  iconContainer.appendChild(icon);

  const textContainer = document.createElement("span");
  textContainer.textContent = text;

  link.appendChild(iconContainer);
  link.appendChild(textContainer);

  parent.appendChild(link);
  return link;
}

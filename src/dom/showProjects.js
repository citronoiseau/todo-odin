import updateProjects from "./updateProjects";
import { projects } from "../projectHandler/createProject";

export default function showProject() {
  const projectList = document.querySelector(".projectList");
  updateProjects();

  projects.forEach((project) => {
    const projectContainer = document.createElement("li");
    projectList.appendChild(projectContainer);

    const textContainer = document.createElement("span");
    textContainer.id = project.title;
    textContainer.classList.add("projectLink");
    textContainer.textContent = project.title;

    projectContainer.appendChild(textContainer);

    const iconContainer = document.createElement("span");
    projectContainer.appendChild(iconContainer);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    iconContainer.appendChild(editBtn);
    iconContainer.appendChild(deleteBtn);

    editBtn.addEventListener("click", () => project.editProject());

    deleteBtn.addEventListener("click", () => project.deleteProject());
  });
}

import updateProjects from "./updateProjects";
import { projects } from "../projectHandler/createProject";

import tagIcon from "../icons/tag.svg";
import editIcon from "../icons/edit.svg";
import deleteIcon from "../icons/delete.svg";

export default function showProject() {
  const projectList = document.querySelector(".projectList");
  updateProjects();

  projects.forEach((project) => {
    const projectContainer = document.createElement("li");
    projectList.appendChild(projectContainer);

    const textContainer = document.createElement("div");
    projectContainer.id = project.title;
    projectContainer.classList.add("projectLink");

    const iconContainer = document.createElement("span");
    const icon = document.createElement("img");
    icon.src = tagIcon;
    iconContainer.appendChild(icon);
    textContainer.appendChild(iconContainer);

    const text = document.createElement("span");
    text.textContent = project.title;
    textContainer.appendChild(text);

    projectContainer.appendChild(textContainer);

    const btnContainer = document.createElement("span");
    projectContainer.appendChild(btnContainer);

    const editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    const editImg = document.createElement("img");
    editImg.src = editIcon;
    editBtn.appendChild(editImg);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("removeBtn");
    const deleteImg = document.createElement("img");
    deleteImg.src = deleteIcon;
    deleteBtn.appendChild(deleteImg);

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    editBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      project.editProject();
    });

    deleteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      project.deleteProject();
    });
  });
}

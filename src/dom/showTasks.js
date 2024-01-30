import updateList from "./updateList";
import { format } from "date-fns";
import { projects } from "../projectHandler/createProject";

import editIcon from "../icons/edit.svg";
import deleteIcon from "../icons/delete.svg";
import tagIcon from "../icons/tagSmall.svg";

export default function changeTasks(name, tasks) {
  const title = document.querySelector("h2");
  const description = document.querySelector(".projectMainDescription");
  title.textContent = name;
  description.textContent = "";
  const matchingProject = projects.find((project) => project.title === name);

  if (matchingProject) {
    description.textContent = matchingProject.getDescription();
  }
  updateList();
  const taskList = document.querySelector(".taskList");

  tasks.forEach((task) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    taskList.appendChild(taskContainer);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    taskContainer.appendChild(checkbox);

    const mainInfo = document.createElement("div");
    mainInfo.classList.add("mainInfo");
    taskContainer.appendChild(mainInfo);

    const textInfo = document.createElement("div");
    textInfo.classList.add("textInfo");
    mainInfo.appendChild(textInfo);
    const taskName = document.createElement("div");
    taskName.textContent = task.title;
    textInfo.appendChild(taskName);

    if (task.description !== "none") {
      const taskDescription = document.createElement("p");
      taskDescription.textContent = task.description;
      textInfo.appendChild(taskDescription);
    }

    const dataContainer = document.createElement("div");
    mainInfo.appendChild(dataContainer);

    const taskDueDate = document.createElement("div");
    const dueDate = new Date(task.dueDate);
    const formattedDate = format(dueDate, "d MMM");
    taskDueDate.textContent = formattedDate;
    dataContainer.appendChild(taskDueDate);

    if (task.time !== "") {
      taskDueDate.textContent = `${formattedDate}, ${task.time}`;
    }

    const secondaryInfo = document.createElement("div");
    secondaryInfo.classList.add("secondaryInfo");
    taskContainer.appendChild(secondaryInfo);

    if (task.project !== "none") {
      const taskProject = document.createElement("div");
      const projectIcon = document.createElement("img");
      projectIcon.src = tagIcon;
      taskProject.appendChild(projectIcon);
      const projectName = document.createElement("span");
      projectName.textContent = task.project;
      taskProject.appendChild(projectName);
      secondaryInfo.appendChild(taskProject);
    }

    const btnContainer = document.createElement("div");
    secondaryInfo.appendChild(btnContainer);

    const editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    const editImg = document.createElement("img");
    editImg.src = editIcon;
    editBtn.appendChild(editImg);
    editBtn.addEventListener("click", () => task.editTask());

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("removeBtn");
    const deleteImg = document.createElement("img");
    deleteImg.src = deleteIcon;
    deleteBtn.appendChild(deleteImg);
    deleteBtn.addEventListener("click", () => task.deleteTask());

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    const taskPriority = task.priority;
    if (taskPriority === "High") {
      taskContainer.style.borderLeft = "5px solid  #F94876";
    } else if (taskPriority === "Medium") {
      taskContainer.style.borderLeft = "5px solid #F6C058";
    } else if (taskPriority === "Low") {
      taskContainer.style.borderLeft = "5px solid #42AC7F";
    }

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        textInfo.classList.add("taskChecked");
      } else {
        textInfo.classList.remove("taskChecked");
      }
    });
  });
}

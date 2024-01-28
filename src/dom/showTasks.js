import updateList from "./updateList";
import { format } from "date-fns";
import { projects } from "../projectHandler/createProject";

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

    const taskName = document.createElement("div");
    taskName.textContent = task.title;
    taskContainer.appendChild(taskName);

    if (task.description !== "none") {
      const taskDescription = document.createElement("p");
      taskDescription.textContent = task.description;
      taskContainer.appendChild(taskDescription);
    }

    const taskDueDate = document.createElement("div");
    const dueDate = new Date(task.dueDate);
    const formattedDate = format(dueDate, "d MMM");
    taskDueDate.textContent = formattedDate;
    taskContainer.appendChild(taskDueDate);

    if (task.time !== "") {
      const taskTime = document.createElement("div");
      taskTime.textContent = task.time;
      taskContainer.appendChild(taskTime);
    }

    if (task.project !== "none") {
      const taskProject = document.createElement("div");
      taskProject.textContent = task.project;
      taskContainer.appendChild(taskProject);
    }

    const iconContainer = document.createElement("div");
    taskContainer.appendChild(iconContainer);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      task.editTask();
    });
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    removeBtn.addEventListener("click", () => task.deleteTask());
    iconContainer.appendChild(editBtn);
    iconContainer.appendChild(removeBtn);

    const taskPriority = task.priority;
    if (taskPriority === "High") {
      taskContainer.style.borderLeft = "5px solid  #F94876";
    } else if (taskPriority === "Medium") {
      taskContainer.style.borderLeft = "5px solid #F6C058";
    } else if (taskPriority === "Low") {
      taskContainer.style.borderLeft = "5px solid #42AC7F";
    }
  });
}

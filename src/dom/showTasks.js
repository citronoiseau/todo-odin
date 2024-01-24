export default function changeTasks(name, tasks) {
  const title = document.querySelector("h2");
  title.textContent = name;

  const taskList = document.querySelector(".taskList");

  tasks.forEach((task) => {
    const taskContainer = document.createElement("div");
    taskList.appendChild(taskContainer);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskName = document.createElement("div");
    taskName.textContent = task.name;
    taskContainer.appendChild(taskName);

    if (task.description !== "none") {
      const taskDescription = document.createElement("p");
      taskDescription.textContent = task.description;
      taskContainer.appendChild(taskDescription);
    }

    const taskDueDate = document.createElement("div");
    taskDueDate.textContent = task.dueDate;
    taskContainer.appendChild(taskDueDate);

    if (task.project !== "none") {
      const taskProject = document.createElement("div");
      taskProject.textContent = task.project;
      taskContainer.appendChild(taskProject);
    }

    const iconContainer = document.createElement("div");
    taskContainer.appendChild(iconContainer);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    iconContainer.appendChild(editBtn);
    iconContainer.appendChild(removeBtn);

    const taskPriority = task.priority;
    if (taskPriority === "High") {
      taskContainer.style.borderLeftColor = "#42AC7F";
    } else if (taskPriority === "Medium") {
      taskContainer.style.borderLeftColor = "#F6C058";
    } else if (taskPriority === "Low") {
      taskContainer.style.borderLeftColor = "#F94876";
    }
  });
}

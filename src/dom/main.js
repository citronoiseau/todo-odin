export default function createMain() {
  const content = document.querySelector("#content");

  const main = document.createElement("div");
  main.id = "main";
  content.appendChild(main);

  const display = document.createElement("div");
  display.classList.add("display");
  main.appendChild(display);

  const title = document.createElement("h2");
  title.textContent = "Inbox";
  display.appendChild(title);

  const description = document.createElement("div");
  description.classList.add("projectMainDescription");
  display.appendChild(description);

  const taskList = document.createElement("div");
  taskList.classList.add("taskList");
  display.appendChild(taskList);

  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("addTaskBtn");
  addTaskBtn.textContent = "Add task";
  display.appendChild(addTaskBtn);
}

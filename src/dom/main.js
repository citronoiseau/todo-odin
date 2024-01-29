export default function createMain() {
  const content = document.querySelector("#content");

  const main = document.createElement("div");
  main.id = "main";
  content.appendChild(main);

  const display = document.createElement("div");
  display.classList.add("display");
  main.appendChild(display);

  const text = document.createElement("div");
  display.appendChild(text);

  const title = document.createElement("h2");
  title.textContent = "Inbox";
  text.appendChild(title);

  const description = document.createElement("div");
  description.classList.add("projectMainDescription");
  text.appendChild(description);

  const taskList = document.createElement("div");
  taskList.classList.add("taskList");
  display.appendChild(taskList);

  const buttonContainer = document.createElement("div");
  display.appendChild(buttonContainer);

  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("addTaskBtn");
  addTaskBtn.textContent = "Add task";
  buttonContainer.appendChild(addTaskBtn);
}

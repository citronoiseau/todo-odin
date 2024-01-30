import burgerMenu from "../icons/burgerMenu.svg";
export default function createMain() {
  const content = document.querySelector("#content");

  const main = document.createElement("div");
  main.id = "main";
  content.appendChild(main);

  const overlay = document.createElement("div");
  overlay.id = "overlay";
  content.appendChild(overlay);

  const display = document.createElement("div");
  display.classList.add("display");
  main.appendChild(display);

  const text = document.createElement("div");
  text.classList.add("infoContainer");
  display.appendChild(text);

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("titleContainer");
  text.appendChild(titleContainer);

  const iconContainer = document.createElement("button");
  iconContainer.classList.add("burgerMenu");
  titleContainer.appendChild(iconContainer);

  const icon = document.createElement("img");
  icon.src = burgerMenu;
  iconContainer.appendChild(icon);

  const title = document.createElement("h2");
  title.textContent = "Inbox";
  titleContainer.appendChild(title);

  const description = document.createElement("div");
  description.classList.add("projectMainDescription");
  text.appendChild(description);

  const taskList = document.createElement("div");
  taskList.classList.add("taskList");
  display.appendChild(taskList);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("btnContainer");
  display.appendChild(buttonContainer);

  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("addTaskBtn");
  addTaskBtn.textContent = "Add task";
  buttonContainer.appendChild(addTaskBtn);
}

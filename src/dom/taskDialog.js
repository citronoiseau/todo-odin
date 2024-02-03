import { projects } from "../projectHandler/createProject";
import cancelIcon from "../icons/cancel.svg";

export default function createTaskDialog() {
  const main = document.querySelector("#main");

  const dialog = document.createElement("dialog");
  dialog.classList.add("taskDialog");
  dialog.classList.add("dialog");
  main.appendChild(dialog);

  const dialogName = document.createElement("h4");
  dialogName.textContent = "Add your task";
  dialog.appendChild(dialogName);

  const taskForm = document.createElement("form");
  dialog.appendChild(taskForm);

  const taskNameContainer = createFormElementContainer(taskForm);
  const taskNameLabel = createLabel("Title:", "title", taskNameContainer);
  const taskNameInput = createInput("text", "title", taskNameContainer);
  taskNameInput.maxLength = 30;
  taskNameInput.required = true;
  taskNameInput.placeholder = "Dentist Appointment";

  const taskDescriptionContainer = createFormElementContainer(taskForm);
  const taskDescriptionLabel = createLabel(
    "Notes (optional):",
    "description",
    taskDescriptionContainer
  );
  const taskDescriptionText = document.createElement("textarea");
  taskDescriptionText.id = "description";
  taskDescriptionText.classList.add("noResize");
  taskDescriptionText.maxLength = 100;
  taskDescriptionText.placeholder = "dentist's name, phone, adress...";

  taskDescriptionContainer.appendChild(taskDescriptionText);

  const secondaryInfo = document.createElement("div");
  secondaryInfo.classList.add("secondaryInfoDialog");
  taskForm.appendChild(secondaryInfo);

  const taskDateContainer = createFormElementContainer(secondaryInfo);
  const taskDateLabel = createLabel(
    "Due date (optional):",
    "dueDate",
    taskDateContainer
  );
  const taskDateInput = createInput("date", "dueDate", taskDateContainer);

  const taskTimeContainer = createFormElementContainer(secondaryInfo);
  const taskTimeLabel = createLabel(
    "Time (optional):",
    "time",
    taskTimeContainer
  );
  const taskTimeInput = createInput("time", "time", taskTimeContainer);
  taskTimeInput.value = "none";

  const priorityContainer = createFormElementContainer(secondaryInfo);
  const priorityLabel = createLabel(
    "Priority:",
    "prioritySelector",
    priorityContainer
  );
  const prioritySelector = document.createElement("select");
  prioritySelector.id = "prioritySelector";
  prioritySelector.value = "High";
  priorityContainer.appendChild(prioritySelector);

  const priorities = ["High", "Medium", "Low"];
  priorities.forEach((priority) => {
    const priorityVariant = document.createElement("option");
    priorityVariant.value = priority;
    priorityVariant.textContent = priority;
    prioritySelector.appendChild(priorityVariant);
  });

  const projectContainer = createFormElementContainer(secondaryInfo);
  const projectLabel = createLabel(
    "Project:",
    "projectSelector",
    projectContainer
  );
  const projectSelector = document.createElement("select");
  projectSelector.id = "projectSelector";
  projectContainer.appendChild(projectSelector);
  updateOptions();

  const buttonContainer = document.createElement("div");
  taskForm.appendChild(buttonContainer);

  const confirmBtn = createInput("submit", "confirmBtn", buttonContainer);
  confirmBtn.value = "Confirm";
  const cancelBtn = document.createElement("button");
  const cancel = document.createElement("img");
  cancel.src = cancelIcon;
  cancelBtn.appendChild(cancel);
  cancelBtn.id = "cancelBtn";
  buttonContainer.appendChild(cancelBtn);
}

function createLabel(text, forInput, parent) {
  const label = document.createElement("label");
  label.textContent = text;
  label.htmlFor = forInput;

  parent.appendChild(label);
}

function createInput(type, id, parent) {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.name = id;

  parent.appendChild(input);
  return input;
}
function createFormElementContainer(parent) {
  const formElementContainer = document.createElement("div");
  formElementContainer.classList.add("formElement");
  parent.appendChild(formElementContainer);
  return formElementContainer;
}

export function updateOptions() {
  const projectSelector = document.querySelector("#projectSelector");
  projectSelector.innerHTML = "";
  if (projects.length === 0) {
    const noProjects = document.createElement("option");
    noProjects.textContent = "You have no projects!";
    noProjects.value = "none";
    projectSelector.appendChild(noProjects);
  } else {
    const noProjects = document.createElement("option");
    noProjects.textContent = "No project";
    noProjects.value = "none";
    projectSelector.appendChild(noProjects);
    projects.forEach((project) => {
      const projectOption = document.createElement("option");
      projectOption.textContent = project.title;
      projectOption.value = project.title;
      projectSelector.appendChild(projectOption);
    });
  }
}
export function editDialog() {
  const dialogName = document.querySelector("h4");
  dialogName.textContent = "Edit your task";
}
export function returnDialog() {
  const dialogName = document.querySelector("h4");
  dialogName.textContent = "Add your task";
}

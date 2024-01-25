export default function createTaskDialog() {
  const main = document.querySelector("#main");

  const dialog = document.createElement("dialog");
  dialog.classList.add("dialog");
  main.appendChild(dialog);

  const taskForm = document.createElement("form");
  dialog.appendChild(taskForm);

  const taskNameContainer = createFormElementContainer(taskForm);
  const taskNameLabel = createLabel(
    "Your task title:",
    "title",
    taskNameContainer
  );
  const taskNameInput = createInput("text", "title", taskNameContainer);
  taskNameInput.maxLength = 30;
  taskNameInput.required = true;

  const taskDescriptionContainer = createFormElementContainer(taskForm);
  const taskDescriptionLabel = createLabel(
    "Description (optional):",
    "description",
    taskDescriptionContainer
  );
  const taskDescriptionText = document.createElement("textarea");
  taskDescriptionText.id = "description";
  taskDescriptionText.maxLength = 100;
  taskDescriptionContainer.appendChild(taskDescriptionText);

  const taskDateContainer = createFormElementContainer(taskForm);
  const taskDateLabel = createLabel("Due date:", "dueDate", taskDateContainer);
  const taskDateInput = createInput("date", "dueDate", taskDateContainer);
  taskDateInput.required = true;

  const taskTimeContainer = createFormElementContainer(taskForm);
  const taskTimeLabel = createLabel(
    "Time (optional):",
    "time",
    taskTimeContainer
  );
  const taskTimeInput = createInput("time", "time", taskTimeContainer);
  taskTimeInput.value = "none";

  const priorityContainer = createFormElementContainer(taskForm);
  const priorityLabel = createLabel(
    "Task priority:",
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

  const projectContainer = createFormElementContainer(taskForm);
  const projectLabel = createLabel(
    "Task project:",
    "projectSelector",
    projectContainer
  );
  const projectSelector = document.createElement("select");
  projectSelector.id = "projectSelector";
  projectContainer.appendChild(projectSelector);
  const projects = [];
  if (projects.length === 0) {
    const noProjects = document.createElement("option");
    noProjects.textContent = "You have no projects!";
    noProjects.value = "none";
    projectSelector.appendChild(noProjects);
  } else {
    projects.forEach((project) => {
      if (projects.length === 0) {
        const noProjects = document.createElement("option");
        noProjects.textContent = "You have no projects!";
        noProjects.value = "none";
        projectSelector.appendChild(noProjects);
      }
    });
  }

  const buttonContainer = document.createElement("div");
  taskForm.appendChild(buttonContainer);

  const confirmBtn = createInput("submit", "confirmBtn", buttonContainer);
  confirmBtn.value = "Confirm";
  const cancelBtn = document.createElement("button");
  cancelBtn.id = "cancelBtn";
  cancelBtn.textContent = "Cancel";
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
  formElementContainer.classList.add("form-element");
  parent.appendChild(formElementContainer);
  return formElementContainer;
}

import cancelIcon from "../icons/cancel.svg";

export default function createProjectDialog() {
  const sidebar = document.querySelector("#sidebar");

  const dialog = document.createElement("dialog");
  dialog.classList.add("projectDialog");
  dialog.classList.add("dialog");
  sidebar.appendChild(dialog);

  const dialogName = document.createElement("h5");
  dialogName.textContent = "Add your project";
  dialog.appendChild(dialogName);

  const projectForm = document.createElement("form");
  dialog.appendChild(projectForm);

  const projectNameContainer = createFormElementContainer(projectForm);
  const taskNameLabel = createLabel(
    "Title:",
    "projectTitle",
    projectNameContainer
  );
  const projectNameInput = createInput(
    "text",
    "projectTitle",
    projectNameContainer
  );
  projectNameInput.maxLength = 30;
  projectNameInput.required = true;
  projectNameInput.placeholder = "Work";

  const projectDescriptionContainer = createFormElementContainer(projectForm);
  const projectDescriptionLabel = createLabel(
    "Notes (optional):",
    "projectDescription",
    projectDescriptionContainer
  );
  const projectDescriptionText = document.createElement("textarea");
  projectDescriptionText.id = "projectDescription";
  projectDescriptionText.classList.add("noResize");
  projectDescriptionText.maxLength = 200;
  projectDescriptionText.placeholder = "Work: Passion in Action.";
  projectDescriptionContainer.appendChild(projectDescriptionText);

  const buttonContainer = document.createElement("div");
  projectForm.appendChild(buttonContainer);

  const confirmBtn = createInput(
    "submit",
    "projectConfirmBtn",
    buttonContainer
  );
  confirmBtn.value = "Confirm";
  const cancelBtn = document.createElement("button");
  cancelBtn.id = "projectCancelBtn";
  const cancel = document.createElement("img");
  cancel.src = cancelIcon;
  cancelBtn.appendChild(cancel);
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
export function editDialog() {
  const dialogName = document.querySelector("h5");
  dialogName.textContent = "Edit your project";
}
export function returnDialog() {
  const dialogName = document.querySelector("h5");
  dialogName.textContent = "Add your project";
}

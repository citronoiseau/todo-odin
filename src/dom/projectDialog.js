export default function createProjectDialog() {
  const sidebar = document.querySelector("#sidebar");

  const dialog = document.createElement("dialog");
  dialog.classList.add("projectDialog");
  dialog.classList.add("dialog");
  sidebar.appendChild(dialog);

  const projectForm = document.createElement("form");
  dialog.appendChild(projectForm);

  const projectNameContainer = createFormElementContainer(projectForm);
  const taskNameLabel = createLabel(
    "Your project title:",
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

  const projectDescriptionContainer = createFormElementContainer(projectForm);
  const projectDescriptionLabel = createLabel(
    "Description (optional):",
    "projectDescription",
    projectDescriptionContainer
  );
  const projectDescriptionText = document.createElement("textarea");
  projectDescriptionText.id = "projectDescription";
  projectDescriptionText.classList.add("noResize");
  projectDescriptionText.maxLength = 200;
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

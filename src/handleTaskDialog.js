import createTask from "./createTask";
import handleActiveLink from "./handleActiveLink";
let editMode = false;
let taskToEdit = null;

export default function dialogHandler(
  newEditMode = false,
  newTaskToEdit = null
) {
  editMode = newEditMode;
  taskToEdit = newTaskToEdit;
  const taskDialog = document.querySelector(".dialog");
  const form = taskDialog.querySelector("form");
  const confirmBtn = document.querySelector("#confirmBtn");
  const cancelBtn = document.querySelector("#cancelBtn");

  const titleInput = taskDialog.querySelector("#title");
  const descriptionInput = taskDialog.querySelector("#description");
  const dueDateInput = taskDialog.querySelector("#dueDate");
  const timeInput = taskDialog.querySelector("#time");
  const prioritySelector = taskDialog.querySelector("#prioritySelector");
  const projectSelector = taskDialog.querySelector("#projectSelector");

  taskDialog.showModal();
  taskDialog.classList.add("active");

  if (editMode && taskToEdit) {
    titleInput.value = taskToEdit.title;
    descriptionInput.value = taskToEdit.description;
    dueDateInput.value = taskToEdit.dueDate;
    timeInput.value = taskToEdit.time;
    prioritySelector.value = taskToEdit.priority;
    projectSelector.value = taskToEdit.project;
  }
  confirmBtn.addEventListener("click", (event) => {
    if (form.checkValidity()) {
      const title = titleInput.value;
      const description = descriptionInput.value;
      const dueDate = dueDateInput.value;
      const time = timeInput.value;
      const priority = prioritySelector.value;
      const project = projectSelector.value;

      if (editMode && taskToEdit) {
        taskToEdit.title = title;
        taskToEdit.description = description;
        taskToEdit.dueDate = dueDate;
        taskToEdit.time = time;
        taskToEdit.priority = priority;
        taskToEdit.project = project;
        handleActiveLink();
      } else {
        createTask(title, description, dueDate, time, priority, project);
      }

      event.preventDefault();
      taskDialog.close();
      form.reset();
    }
  });
  cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    form.reset();
    taskDialog.close();
    taskDialog.classList.remove("active");
  });
}

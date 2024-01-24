import createTask from "./createTask";
export default function dialogHandler() {
  const createTaskBtns = document.querySelectorAll(".addTaskBtn");
  const taskDialog = document.querySelector(".dialog");
  const form = taskDialog.querySelector("form");
  const confirmBtn = document.querySelector("#confirmBtn");
  const cancelBtn = document.querySelector("#cancelBtn");

  const titleInput = taskDialog.querySelector("#title");
  const descriptionInput = taskDialog.querySelector("#description");
  const dueDateInput = taskDialog.querySelector("#dueDate");
  const prioritySelector = taskDialog.querySelector("#prioritySelector");
  const projectSelector = taskDialog.querySelector("#projectSelector");

  createTaskBtns.forEach((createTaskBtn) => {
    createTaskBtn.addEventListener("click", () => {
      taskDialog.showModal();
      taskDialog.classList.add("active");
    });
  });

  confirmBtn.addEventListener("click", (event) => {
    if (form.checkValidity()) {
      const title = titleInput.value;
      const description = descriptionInput.value;
      const dueDate = dueDateInput.value;
      const priority = prioritySelector.value;
      const project = projectSelector.value;

      createTask(title, description, dueDate, priority, project);
      event.preventDefault();
      taskDialog.close();
      form.reset();
    }
  });
  cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    taskDialog.close();
    taskDialog.classList.remove("active");
  });
}

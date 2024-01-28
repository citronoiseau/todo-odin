import createProject from "./createProject";
import showProject from "./dom/showProjects";
import { updateOptions } from "./dom/taskDialog";
import { updateAllLinks } from ".";
import handleActiveLink from "./handleActiveLink";

let editMode = false;
let projectToEdit = null;

export default function projectDialogHandler(
  newEditMode = false,
  newprojectToEdit = null
) {
  editMode = newEditMode;
  projectToEdit = newprojectToEdit;

  const projectDialog = document.querySelector(".projectDialog");
  const form = projectDialog.querySelector("form");
  const confirmBtn = projectDialog.querySelector("#projectConfirmBtn");
  const cancelBtn = projectDialog.querySelector("#projectCancelBtn");

  const titleInput = projectDialog.querySelector("#projectTitle");
  const descriptionInput = projectDialog.querySelector("#projectDescription");

  projectDialog.showModal();
  projectDialog.classList.add("active");

  if (editMode && projectToEdit) {
    titleInput.value = projectToEdit.title;
    descriptionInput.value = projectToEdit.description;
  }

  confirmBtn.addEventListener("click", (event) => {
    if (form.checkValidity()) {
      const title = titleInput.value.trim();
      const description = descriptionInput.value;
      if (editMode && projectToEdit) {
        projectToEdit.title = title;
        projectToEdit.description = description;
        showProject();

        const noLinkResult = handleActiveLink();
        if (noLinkResult === "none") {
          const newProject = document.querySelector(`#${projectToEdit.title}`);
          newProject.classList.add("active");
        }
        updateAllLinks();
        updateOptions();
        handleActiveLink();
      } else {
        createProject(title, description);
      }

      event.preventDefault();
      projectDialog.close();
      form.reset();
    }
  });

  cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    form.reset();
    projectDialog.close();
    projectDialog.classList.remove("active");
  });
}

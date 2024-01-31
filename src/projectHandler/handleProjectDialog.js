import createProject from "./createProject";
import showProject from "../dom/showProjects";
import { updateOptions } from "../dom/taskDialog";
import { updateAllLinks } from "..";
import handleActiveLink from "../handleActiveLink";
import { saveProjectsToLocalStorage } from "./createProject";
import { editDialog, returnDialog } from "../dom/projectDialog";
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
  if (editMode) {
    editDialog();
  } else {
    returnDialog();
  }
  projectDialog.showModal();
  projectDialog.classList.add("active");

  if (editMode && projectToEdit) {
    titleInput.value = projectToEdit.title;
    if (projectToEdit.description) {
      descriptionInput.value = projectToEdit.description;
    } else {
      descriptionInput.value = "";
    }
  }

  confirmBtn.addEventListener("click", (event) => {
    if (form.checkValidity()) {
      const title = titleInput.value.trim();
      const description = descriptionInput.value;
      if (editMode && projectToEdit) {
        projectToEdit.title = title;
        projectToEdit.description = description;
        showProject();
        updateAllLinks();
        updateOptions();
        handleActiveLink();
        saveProjectsToLocalStorage();
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

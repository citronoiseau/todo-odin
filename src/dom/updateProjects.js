export default function updateProjects() {
  const projectList = document.querySelector(".projectList");
  removeProjects(projectList);
}
function removeProjects(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

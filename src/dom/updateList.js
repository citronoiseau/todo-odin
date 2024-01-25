export default function updateList() {
  const taskList = document.querySelector(".taskList");
  removeTasks(taskList);
}
function removeTasks(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

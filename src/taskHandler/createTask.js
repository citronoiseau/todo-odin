import handleActiveLink from "../handleActiveLink";
import dialogHandler from "./handleTaskDialog";

class Task {
  constructor(title, description, dueDate, time, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.time = time;
    this.priority = priority;
    this.project = project;
  }

  static fromObject(obj) {
    return new Task(
      obj.title,
      obj.description,
      obj.dueDate,
      obj.time,
      obj.priority,
      obj.project
    );
  }

  editTask() {
    dialogHandler(true, this);
  }

  deleteTask() {
    const confirmed = window.confirm(
      "Are you sure you want to remove this book?"
    );
    if (confirmed) {
      const position = tasks.indexOf(this);
      tasks.splice(position, 1);
      handleActiveLink();
      saveTasksToLocalStorage();
    }
  }
}

const storedTasks = localStorage.getItem("tasks");
export const tasks = storedTasks
  ? JSON.parse(storedTasks).map(Task.fromObject)
  : [];

export default function createTask(
  title,
  description,
  dueDate,
  time,
  priority,
  project
) {
  let newTask = new Task(title, description, dueDate, time, priority, project);
  tasks.push(newTask);
  handleActiveLink();
  saveTasksToLocalStorage();
}

function createDefaultTasks() {
  if (tasks.length === 0) {
    const defaultTask = new Task(
      "Wash the dishes",
      "5 spoons, 3 pans, 8 mugs",
      "2024-01-30",
      "",
      "Low",
      "Home"
    );

    const secondDefaultTask = new Task(
      "Finish the to-do app",
      "",
      "2024-02-04",
      "",
      "High",
      "Programming"
    );

    const thirdDefaultTask = new Task(
      "Meet Alex",
      "",
      "2024-02-05",
      "14:00",
      "Medium",
      "none"
    );
    tasks.push(defaultTask, secondDefaultTask, thirdDefaultTask);
    saveTasksToLocalStorage();
  }
}
createDefaultTasks();

export function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

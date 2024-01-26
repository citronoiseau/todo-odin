import handleActiveLink from "./handleActiveLink";
import dialogHandler from "./handleTaskDialog";
export const tasks = [];

class Task {
  constructor(title, description, dueDate, time, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.time = time;
    this.priority = priority;
    this.project = project;
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
    }
  }
}

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
}
const defaultTask = new Task(
  "Wash the dishes",
  "5 spoons, 3 pans, 8 mugs",
  "2024-01-30",
  "",
  "Low",
  "none"
);

tasks.push(defaultTask);

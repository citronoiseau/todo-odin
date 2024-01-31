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
    this.isCompleted = false;
  }

  static fromObject(obj) {
    return new Task(
      obj.title,
      obj.description,
      obj.dueDate,
      obj.time,
      obj.priority,
      obj.project,
      obj.isCompleted
    );
  }

  editTask() {
    dialogHandler(true, this);
  }

  deleteTask() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmed) {
      const position = tasks.indexOf(this);
      tasks.splice(position, 1);
      handleActiveLink();
      saveTasksToLocalStorage();
    }
  }

  completeTask() {
    this.isCompleted = !this.isCompleted;
    handleActiveLink();
    saveTasksToLocalStorage();
  }
}

export function deleteProjectTask(projectName) {
  tasks = tasks.filter((task) => task.project !== projectName);
  handleActiveLink();
  saveTasksToLocalStorage();
}

const storedTasks = localStorage.getItem("tasks");
export let tasks = storedTasks
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
      "Buy groceries",
      "milk, sausages, eggs, apple juice, cereal, oatmeal cookies",
      "",
      "",
      "Low",
      "Home",
      "false"
    );

    const secondDefaultTask = new Task(
      "Finish the to-do app",
      "",
      "2024-02-04",
      "",
      "High",
      "Programming",
      "false"
    );

    const thirdDefaultTask = new Task(
      "Meet Alex",
      "",
      "2024-02-05",
      "14:00",
      "Medium",
      "none",
      "false"
    );

    tasks.push(defaultTask, secondDefaultTask, thirdDefaultTask);
    saveTasksToLocalStorage();
  }
}
createDefaultTasks();

export function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

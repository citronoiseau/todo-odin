import { tasks } from "./createTask";
import { projects } from "../projectHandler/createProject";
import { format, isToday, addDays, isAfter, isBefore } from "date-fns";
import showTasks from "../dom/showTasks";
let isProject = false;
export default function handleTaskDisplay(name) {
  let filteredTasks = tasks.filter((task) => !task.isCompleted);
  if (projects.some((project) => project.title === name)) {
    isProject = true;
  }

  if (name === "inbox") {
    showTasks(name, filteredTasks);
  }
  if (name === "today") {
    const todayTasks = filteredTasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      return isToday(dueDate);
    });

    showTasks(name, todayTasks);
  }
  if (name === "upcoming") {
    const upcomingTasks = filteredTasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      const oneWeekLater = addDays(new Date(), 7);

      return (
        isToday(dueDate) ||
        (isAfter(dueDate, new Date()) && isBefore(dueDate, oneWeekLater))
      );
    });

    showTasks(name, upcomingTasks);
  }
  if (name === "completed") {
    let filteredTasks = tasks.filter((task) => task.isCompleted);
    showTasks(name, filteredTasks);
  }
  if (isProject) {
    const projectTasks = filteredTasks.filter((task) => task.project === name);
    showTasks(name, projectTasks);
  }

  isProject = false;
}

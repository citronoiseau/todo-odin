import { tasks } from "./createTask";
import { projects } from "../projectHandler/createProject";
import { format, isToday, addDays, isAfter, isBefore } from "date-fns";
import showTasks from "../dom/showTasks";
let isProject = false;
export default function handleTaskDisplay(name) {
  if (projects.some((project) => project.title === name)) {
    isProject = true;
  }

  if (name === "inbox") {
    showTasks(name, tasks);
  }
  if (name === "today") {
    const todayTasks = tasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      return isToday(dueDate);
    });

    showTasks(name, todayTasks);
  }
  if (name === "upcoming") {
    const upcomingTasks = tasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      const oneWeekLater = addDays(new Date(), 7);

      return (
        isToday(dueDate) ||
        (isAfter(dueDate, new Date()) && isBefore(dueDate, oneWeekLater))
      );
    });

    showTasks(name, upcomingTasks);
  }
  if (isProject) {
    const projectTasks = tasks.filter((task) => task.project === name);
    showTasks(name, projectTasks);
  }
  isProject = false;
}

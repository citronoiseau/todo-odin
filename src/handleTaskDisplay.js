import { tasks } from "./createTask";
import { format, isToday, addDays, isAfter, isBefore } from "date-fns";
import showTasks from "./dom/showTasks";

export default function handleTaskDisplay(name) {
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
}

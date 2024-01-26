import "./style.css";
import pageLoader from "./pageLoader";
import dialogHandler from "./handleTaskDialog";
import handleActiveLink from "./handleActiveLink";

pageLoader();

const inbox = document.querySelector("#inbox");
const today = document.querySelector("#today");
const upcoming = document.querySelector("#upcoming");
const createTaskBtns = document.querySelectorAll(".addTaskBtn");

[inbox, today, upcoming].forEach((link) => {
  link.addEventListener("click", () => {
    [inbox, today, upcoming].forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
    handleActiveLink();
  });
});

createTaskBtns.forEach((createTaskBtn) => {
  createTaskBtn.addEventListener("click", () => {
    dialogHandler(false, null);
  });
});

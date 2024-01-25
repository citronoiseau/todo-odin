import handleTaskDisplay from "./handleTaskDisplay";

export default function handleActiveLink() {
  const inbox = document.querySelector("#inbox");
  const today = document.querySelector("#today");
  const upcoming = document.querySelector("#upcoming");

  const activeLink = [inbox, today, upcoming].find((link) =>
    link.classList.contains("active")
  );

  const passLink = activeLink.id;
  handleTaskDisplay(passLink);
}

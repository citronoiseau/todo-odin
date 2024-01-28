import handleTaskDisplay from "./handleTaskDisplay";

export default function handleActiveLink() {
  const inbox = document.querySelector("#inbox");
  const today = document.querySelector("#today");
  const upcoming = document.querySelector("#upcoming");

  const projectLinks = document.querySelectorAll(".projectLink");
  const allLinks = [inbox, today, upcoming, ...projectLinks];
  const activeLink = allLinks.find((link) => link.classList.contains("active"));

  if (!activeLink) {
    return "none";
  } else {
    const passLink = activeLink.id;
    handleTaskDisplay(passLink);
  }
}

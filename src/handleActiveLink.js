import handleTaskDisplay from "./taskHandler/handleTaskDisplay";
let savedLink = null;
export default function handleActiveLink() {
  const inbox = document.querySelector("#inbox");
  const today = document.querySelector("#today");
  const upcoming = document.querySelector("#upcoming");

  const projectLinks = document.querySelectorAll(".projectLink");
  const allLinks = [inbox, today, upcoming, ...projectLinks];
  const activeLink = allLinks.find((link) => link.classList.contains("active"));

  if (!activeLink) {
    handleTaskDisplay(savedLink);
    const savedLinkActive = document.querySelector(`#${savedLink}`);
    savedLinkActive.classList.add("active");
  } else {
    const passLink = activeLink.id;
    handleTaskDisplay(passLink);
    savedLink = passLink;
  }
}

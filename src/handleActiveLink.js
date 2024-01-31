import handleTaskDisplay from "./taskHandler/handleTaskDisplay";
let savedLink = null;
export default function handleActiveLink() {
  const links = document.querySelectorAll(".link");
  const projectLinks = document.querySelectorAll(".projectLink");
  const allLinks = [...links, ...projectLinks];
  const activeLink = allLinks.find((link) => link.classList.contains("active"));

  if (!activeLink) {
    const savedLinkActive = document.querySelector(`#${savedLink}`);
    if (savedLinkActive) {
      savedLinkActive.classList.add("active");
      handleTaskDisplay(savedLink);
    } else {
      const passLink = inbox.id;
      inbox.classList.add("active");
      handleTaskDisplay(passLink);
    }
  }
  if (activeLink) {
    const passLink = activeLink.id;
    handleTaskDisplay(passLink);
    savedLink = passLink;
  }
}

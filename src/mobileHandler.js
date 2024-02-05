let isSidebarOpen = false;
let isMobile = false;

export default function setupMobileHandler() {
  const overlay = document.getElementById("overlay");
  const sidebar = document.querySelector("#sidebar");
  const burgerMenu = document.querySelector(".burgerMenu");

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;

    if (isSidebarOpen) {
      sidebar.style.transform = "translateX(0)";
      overlay.classList.add("shown");
    } else {
      sidebar.style.transform = "translateX(-100%)";
      overlay.classList.remove("shown");
    }
  }

  function handleDocumentClick(event) {
    const clickedElement = event.target;
    const isModalDialog = clickedElement.closest("dialog");

    if (
      !sidebar.contains(event.target) &&
      !burgerMenu.contains(event.target) &&
      !isModalDialog &&
      isMobile
    ) {
      sidebar.style.transform = "translateX(-100%)";
      overlay.classList.remove("shown");
      isSidebarOpen = false;
    }
  }

  function handleResize() {
    const screenWidth = window.innerWidth;
    overlay.classList.remove("shown");

    if (screenWidth > 1024) {
      sidebar.style.transform = "translateX(0)";
      isSidebarOpen = false;
      isMobile = false;
    } else {
      sidebar.style.transform = "translateX(-100%)";
      isSidebarOpen = false;
      isMobile = true;
    }
  }

  handleResize();

  burgerMenu.addEventListener("click", toggleSidebar);
  document.addEventListener("click", handleDocumentClick);
  window.addEventListener("resize", handleResize);
}

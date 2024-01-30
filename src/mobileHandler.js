let isSidebarOpen = false;
let isMobile = false;

function mobileHandler() {
  const burgerMenu = document.querySelector(".burgerMenu");
  const overlay = document.getElementById("overlay");
  const sidebar = document.querySelector("#sidebar");

  burgerMenu.addEventListener("click", toggleSidebar);

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;

    if (isSidebarOpen) {
      sidebar.style.transform = "translateX(0)";
      overlay.style.display = "block";
    } else {
      sidebar.style.transform = "translateX(-100%)";
      overlay.style.display = "none";
    }
  }

  document.addEventListener("click", function (event) {
    const clickedElement = event.target;
    const isModalDialog = clickedElement.closest("dialog");
    if (
      !sidebar.contains(event.target) &&
      !burgerMenu.contains(event.target) &&
      !isModalDialog &&
      isMobile
    ) {
      sidebar.style.transform = "translateX(-100%)";
      overlay.style.display = "none";
      isSidebarOpen = false;
    }
  });

  window.addEventListener("resize", function () {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      sidebar.style.transform = "translateX(0)";
      overlay.style.display = "none";
      isMobile = false;
    } else {
      sidebar.style.transform = "translateX(-100%)";
      isMobile = true;
    }
  });
}

export default function setupMobileHandler() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 1024) {
    isMobile = true;
    mobileHandler();
  }
}

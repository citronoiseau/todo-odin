import createSideBar from "./dom/sidebar";
import createMain from "./dom/main";
import createTaskDialog from "./dom/taskDialog";
import handleActiveLink from "./handleActiveLink";

export default function pageLoader() {
  createSideBar();
  createMain();
  createTaskDialog();
  handleActiveLink();
}

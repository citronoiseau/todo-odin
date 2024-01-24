import createSideBar from "./dom/sidebar";
import createMain from "./dom/main";
import createTaskDialog from "./dom/taskDialog";

export default function pageLoader() {
  createSideBar();
  createMain();
  createTaskDialog();
}

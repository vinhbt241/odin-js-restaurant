import { initHomeContent } from "./home";
import { initNavBar } from "./navBar"

const content = document.querySelector("#content");


content.appendChild(initNavBar());
content.appendChild(initHomeContent());

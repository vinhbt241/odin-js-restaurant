import { initHomeContent } from "./home"
import { initMenuContent } from "./menu"
import { initContactContent } from "./contact"

const content = document.querySelector("#content");

function initNavBar() {
  const navContainer = document.createElement('div');

  const home = document.createElement('button');
  home.innerText = "Home";
  home.onclick = () => {
    content.innerHTML = "";
    content.appendChild(initNavBar());
    content.appendChild(initHomeContent());
  }
  navContainer.appendChild(home);

  const menu = document.createElement('button');
  menu.innerText = "Menu";
  menu.onclick = () => {
    content.innerHTML = "";
    content.appendChild(initNavBar());
    content.appendChild(initMenuContent());
  }
  navContainer.appendChild(menu);

  const contact = document.createElement('button');
  contact.innerText = "Contact";
  contact.onclick = () => {
    content.innerHTML = "";
    content.appendChild(initNavBar());
    content.appendChild(initContactContent());
  }
  navContainer.appendChild(contact);

  return navContainer;
}

export { initNavBar }

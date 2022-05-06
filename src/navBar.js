function initNavBar() {
  const content = document.createElement('div');

  const home = document.createElement('a');
  home.innerText = "Home";
  home.href = './index.html';
  content.appendChild(home);

  const menu = document.createElement('a');
  menu.innerText = "Menu";
  menu.href = './menu.html';
  content.appendChild(menu);

  const contact = document.createElement('a');
  contact.innerText = "Contact";
  contact.href = './contact.html';
  content.appendChild(contact);

  return content;
}

export { initNavBar }

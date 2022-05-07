import ContactOne from './contact-one.jpg';
import ContactTwo from './contact-two.jpeg';
import contactThree from './contact-three.jpg';

function initContactContent() {
  const content = document.createElement('div');

  const header = document.createElement('h1');
  header.innerText = "Contact Us!";
  content.appendChild(header);

  const contactOnePerson = document.createElement('h2');
  contactOnePerson.innerText = "Our waiter";
  content.appendChild(contactOnePerson);

  const contactOneImg = new Image();
  contactOneImg.src = ContactOne;
  contactOneImg.alt = "Contact one look";
  content.appendChild(contactOneImg);

  const contactOneInfo = document.createElement('p');
  contactOneInfo.innerText = "Suspendisse potenti. Proin lobortis tellus et eleifend congue. Mauris lorem neque, malesuada eget ipsum sit amet, sodales luctus mi. Nunc tellus velit, aliquam nec porttitor ornare, venenatis eleifend magna. Quisque sed mauris quis augue elementum viverra eget quis enim. Mauris in odio sit amet quam viverra consequat. Quisque pretium odio et enim tempus volutpat. Phasellus dictum sed nisi nec laoreet. Donec eu ex mi. Ut vitae ultrices diam."
  content.appendChild(contactOneInfo);

  const contactOnePhone = document.createElement('p');
  contactOnePhone.innerText = "111-222-3344";
  content.appendChild(contactOnePhone);

  const contactTwoPerson = document.createElement('h2');
  contactTwoPerson.innerText = "Our chef";
  content.appendChild(contactTwoPerson);

  const contactTwoImg = new Image();
  contactTwoImg.src = ContactTwo;
  contactTwoImg.alt = "Contact two look";
  content.appendChild(contactTwoImg);

  const contactTwoInfo = document.createElement('p');
  contactTwoInfo.innerText = "Suspendisse potenti. Proin lobortis tellus et eleifend congue. Mauris lorem neque, malesuada eget ipsum sit amet, sodales luctus mi. Nunc tellus velit, aliquam nec porttitor ornare, venenatis eleifend magna. Quisque sed mauris quis augue elementum viverra eget quis enim. Mauris in odio sit amet quam viverra consequat. Quisque pretium odio et enim tempus volutpat. Phasellus dictum sed nisi nec laoreet. Donec eu ex mi. Ut vitae ultrices diam."
  content.appendChild(contactTwoInfo);

  const contactTwoPhone = document.createElement('p');
  contactTwoPhone.innerText = "111-222-3344";
  content.appendChild(contactTwoPhone);

  const contactThreePerson = document.createElement('h2');
  contactThreePerson.innerText = "Our CEO";
  content.appendChild(contactThreePerson);

  const contactThreeImg = new Image();
  contactThreeImg.src = contactThree;
  contactThreeImg.alt = "Contact three look";
  content.appendChild(contactThreeImg);

  const contactThreeInfo = document.createElement('p');
  contactThreeInfo.innerText = "Suspendisse potenti. Proin lobortis tellus et eleifend congue. Mauris lorem neque, malesuada eget ipsum sit amet, sodales luctus mi. Nunc tellus velit, aliquam nec porttitor ornare, venenatis eleifend magna. Quisque sed mauris quis augue elementum viverra eget quis enim. Mauris in odio sit amet quam viverra consequat. Quisque pretium odio et enim tempus volutpat. Phasellus dictum sed nisi nec laoreet. Donec eu ex mi. Ut vitae ultrices diam."
  content.appendChild(contactThreeInfo);

  const contactThreePhone = document.createElement('p');
  contactThreePhone.innerText = "111-222-3344";
  content.appendChild(contactThreePhone);

  return content;
}

export { initContactContent }

import Appetizer from './appertizer.jpg';
import MainCourse from './main-course.jpg';
import Dessert from './dessert.jpg';

function initMenuContent() {
  const content = document.createElement('div');

  const header = document.createElement('h1');
  header.innerText = "Menu";
  content.appendChild(header);

  const appetizerDishName = document.createElement('h2');
  appetizerDishName.innerText = "Appertizer";
  content.appendChild(appetizerDishName);

  const appetizerDishImg = new Image();
  appetizerDishImg.src = Appetizer;
  appetizerDishImg.alt = 'apperizer illustration';
  content.appendChild(appetizerDishImg);

  const appetizerDishDescribe = document.createElement('p');
  appetizerDishDescribe.innerText = "Donec non aliquam nisl. Ut at lorem dignissim, auctor ex ac, venenatis nulla. Aenean scelerisque ante suscipit tortor venenatis, id sodales arcu tempor. Quisque non semper diam. Maecenas et velit neque. Aliquam accumsan mi sed turpis venenatis facilisis. Cras non posuere ex. Phasellus imperdiet dolor massa, non viverra elit laoreet ac. Vestibulum imperdiet, tortor nec porta sodales, mi ex tincidunt ligula, id porta sem urna id augue. Mauris vulputate urna ac rhoncus sagittis."
  content.appendChild(appetizerDishDescribe);

  const mainDishName = document.createElement('h2');
  mainDishName.innerText = "Main course";
  content.appendChild(mainDishName);

  const mainDishImg = new Image();
  mainDishImg.src = MainCourse;
  mainDishImg.alt = 'main course illustration';
  content.appendChild(mainDishImg);

  const mainDishDescribe = document.createElement('p');
  mainDishDescribe.innerText = "Donec non aliquam nisl. Ut at lorem dignissim, auctor ex ac, venenatis nulla. Aenean scelerisque ante suscipit tortor venenatis, id sodales arcu tempor. Quisque non semper diam. Maecenas et velit neque. Aliquam accumsan mi sed turpis venenatis facilisis. Cras non posuere ex. Phasellus imperdiet dolor massa, non viverra elit laoreet ac. Vestibulum imperdiet, tortor nec porta sodales, mi ex tincidunt ligula, id porta sem urna id augue. Mauris vulputate urna ac rhoncus sagittis."
  content.appendChild(mainDishDescribe);
  
  const dessertDishName = document.createElement('h2');
  dessertDishName.innerText = "Dessert";
  content.appendChild(dessertDishName);

  const dessertDishImg = new Image();
  dessertDishImg.src = Dessert;
  dessertDishImg.alt = 'dessert illustration';
  content.appendChild(dessertDishImg);

  const dessertDishDescribe = document.createElement('p');
  dessertDishDescribe.innerText = "Donec non aliquam nisl. Ut at lorem dignissim, auctor ex ac, venenatis nulla. Aenean scelerisque ante suscipit tortor venenatis, id sodales arcu tempor. Quisque non semper diam. Maecenas et velit neque. Aliquam accumsan mi sed turpis venenatis facilisis. Cras non posuere ex. Phasellus imperdiet dolor massa, non viverra elit laoreet ac. Vestibulum imperdiet, tortor nec porta sodales, mi ex tincidunt ligula, id porta sem urna id augue. Mauris vulputate urna ac rhoncus sagittis."
  content.appendChild(dessertDishDescribe);

  return content;
}

export { initMenuContent }

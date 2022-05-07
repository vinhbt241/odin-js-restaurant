import restaurantInterior from './restaurant.jpg'

function initHomeContent() {
  const content = document.createElement("div");

  const restaurantName = document.createElement('h1');
  restaurantName.innerHTML = 'Welcome to Muy Grande Restaurante'
  content.appendChild(restaurantName);
  
  const restaurantImg = new Image();
  restaurantImg.src = restaurantInterior;
  restaurantImg.alt = "Our restaurant"
  content.appendChild(restaurantImg);
  
  const headerOne = document.createElement('h2');
  headerOne.innerHTML = 'Welcome to our 1000 years old restaurant';
  content.appendChild(headerOne);
  
  const paraOne = document.createElement('p');
  paraOne.innerHTML = 'Praesent augue justo, luctus at scelerisque vitae, ullamcorper id est. Aenean id neque sed orci ornare ultricies. Aliquam egestas tortor sed iaculis ultricies. Ut facilisis dolor nec arcu pellentesque, sit amet rhoncus orci vestibulum. Maecenas justo dolor, suscipit eu ex ullamcorper, lacinia pellentesque est. Donec a urna sit amet libero pretium maximus. Fusce volutpat leo sit amet lacus mollis, sed tincidunt nunc laoreet. Nullam a eros nunc. Quisque placerat condimentum nunc quis sagittis. Etiam pellentesque orci augue, eu vestibulum libero tincidunt et.'
  content.appendChild(paraOne);
  
  const headerTwo = document.createElement('h2');
  headerOne.innerHTML = 'In Muy Grande Restaurante...';
  content.appendChild(headerTwo);
  
  const paraTwo = document.createElement('p');
  paraTwo.innerHTML = 'Ut ligula neque, pharetra et lobortis et, interdum ut nunc. Nunc vehicula ac sem eleifend mattis. Proin nec volutpat augue. Morbi auctor pharetra mauris in luctus. Donec pellentesque pellentesque tortor, ac finibus leo mattis nec. Quisque a orci at turpis viverra consequat. Curabitur id ante ut eros semper efficitur non sed arcu. Praesent venenatis dignissim odio, ut auctor ex laoreet a. Cras id mi in tortor porttitor euismod non vitae ante. Curabitur id sapien ut risus gravida pharetra sit amet id massa.'
  content.appendChild(paraTwo);

  return content;
}

export { initHomeContent }

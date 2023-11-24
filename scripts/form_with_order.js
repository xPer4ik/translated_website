// Получение массива из localStorage
const storedArrayString = localStorage.getItem('array');
const storedArray = JSON.parse(storedArrayString) || [];

// Получение элемента, в который вы будете добавлять массив
const containerElement = document.getElementById('all_order');

// Очистка содержимого контейнера перед добавлением новых элементов (если это необходимо)
containerElement.innerHTML = '';

// Обход каждого элемента массива и добавление его на HTML
storedArray.forEach(function(item) {
  const element = document.createElement('p'); // или другой элемент
  element.innerText = item;
  containerElement.appendChild(element);
});


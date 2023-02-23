'use strict';

function createImg(img) {
  const drinkTagImg = document.createElement('img');
  if (img === null) {
    drinkTagImg.setAttribute(
      'src',
      'https://via.placeholder.com/200x200/d3d3d3d3/666666/?text=Sin+foto'
    );
  } else {
    drinkTagImg.setAttribute('src', img);
  }
  drinkTagImg.style = 'width: 150px; height: 150px';
  return drinkTagImg;
}

function renderDrink(drink) {
  const liElement = document.createElement('li');
  const articleElement = document.createElement('article');
  const drinkTagName = document.createElement('h3');
  const drinkTagImg = createImg(drink.strDrinkThumb);
  const drinkName = document.createTextNode(drink.strDrink);

  liElement.setAttribute('id', drink.idDrink);
  // liElement.addEventListener('click', handleClickList);

  ulSearch.appendChild(liElement);
  liElement.appendChild(articleElement);
  articleElement.appendChild(drinkTagName);
  articleElement.appendChild(drinkTagImg);
  drinkTagName.appendChild(drinkName);
  console.log('article', liElement);
}

function renderDrinksList(searchDrinksList) {
  for (const drink of searchDrinksList) {
    renderDrink(drink);
  }
}

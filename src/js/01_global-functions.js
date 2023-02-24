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

function renderDrink(drink, infav) {
  const liElement = document.createElement('li');
  const articleElement = document.createElement('article');
  const drinkTagName = document.createElement('h3');
  const drinkImg = createImg(drink.strDrinkThumb);
  const drinkName = document.createTextNode(drink.strDrink);

  liElement.setAttribute('id', drink.idDrink);
  liElement.addEventListener('click', selectItems);

  if (infav) {
    ulFavorites.appendChild(liElement);
  } else {
    ulSearch.appendChild(liElement);
  }

  liElement.appendChild(articleElement);
  articleElement.appendChild(drinkTagName);
  articleElement.appendChild(drinkImg);
  drinkTagName.appendChild(drinkName);
  return liElement;
}

function renderDrinksList(searchDrinksList, infav) {
  for (const drink of searchDrinksList) {
    renderDrink(drink, infav);
  }
}

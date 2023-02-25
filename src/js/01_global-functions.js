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

  liElement.appendChild(articleElement);
  articleElement.appendChild(drinkTagName);
  articleElement.appendChild(drinkImg);
  drinkTagName.appendChild(drinkName);

  if (infav) {
    ulFavorites.appendChild(liElement);
    const btnX = document.createElement('div');
    const btnXi = document.createElement('i');
    btnX.setAttribute('id', drink.idDrink);
    btnXi.setAttribute('class', 'fa-regular fa-circle-xmark');
    btnX.appendChild(btnXi);
    articleElement.appendChild(btnX);
    btnX.addEventListener('click', handleClickBtnX);
  } else {
    liElement.addEventListener('click', selectItems);
    ulSearch.appendChild(liElement);
  }

  return liElement;
}

function renderDrinksList(list, infav) {
  if (list !== null) {
    for (const drink of list) {
      renderDrink(drink, infav);
    }
  }
}

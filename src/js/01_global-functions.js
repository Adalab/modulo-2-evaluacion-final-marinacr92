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

function renderDrink(drink, isIntoFavList) {
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

  if (isIntoFavList) {
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
}

function renderDrinksList(list, isIntoFavList) {
  if (list !== null) {
    for (const drink of list) {
      renderDrink(drink, isIntoFavList);
    }
  }
}

function addSelectedClass(item) {
  if (item !== null) {
    item.classList.add('selected');
  }
}

function removeSelectedClass(item) {
  if (item !== null) {
    item.classList.remove('selected');
  }
}

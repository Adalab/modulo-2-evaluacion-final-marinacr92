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
  drinkTagImg.setAttribute('class', 'drink-img');
  return drinkTagImg;
}

function renderDrink(drink, isIntoFavList) {
  const liElement = document.createElement('li');
  const articleElement = document.createElement('article');
  const drinkTagName = document.createElement('h3');
  const drinkImg = createImg(drink.strDrinkThumb);
  const drinkName = document.createTextNode(drink.strDrink);

  liElement.setAttribute('id', drink.idDrink);
  articleElement.setAttribute('class', 'drink-article');
  drinkTagName.setAttribute('class', 'drink-name');

  liElement.appendChild(articleElement);
  articleElement.appendChild(drinkTagName);
  drinkTagName.appendChild(drinkName);

  if (isIntoFavList) {
    const containerImg = document.createElement('div');
    const btnX = document.createElement('div');
    const btnXi = document.createElement('i');

    containerImg.setAttribute('class', 'container-img');
    btnX.setAttribute('class', 'container-icon');
    btnXi.setAttribute('id', drink.idDrink);
    btnXi.setAttribute('class', 'fa-solid fa-heart-crack');

    ulFavorites.appendChild(liElement);
    articleElement.appendChild(containerImg);
    containerImg.appendChild(drinkImg);
    containerImg.appendChild(btnX);
    btnX.appendChild(btnXi);

    btnXi.addEventListener('click', handleClickBtnX);
  } else {
    articleElement.appendChild(drinkImg);
    ulSearch.appendChild(liElement);

    liElement.addEventListener('click', selectItems);
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
  showBtnResetFav();
}

function removeSelectedClass(item) {
  if (item !== null) {
    item.classList.remove('selected');
  }
  showBtnResetFav();
}

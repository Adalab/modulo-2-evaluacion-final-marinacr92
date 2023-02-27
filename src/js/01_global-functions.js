'use strict';

//Función para generar la etiqueta html de la imagen y sus atributos
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

//Función para crear la estructura html de un elemento de la etiqueta ul con sus atributos y contenido
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

    btnXi.addEventListener('click', handleClickBtnHeart);
  } else {
    articleElement.appendChild(drinkImg);
    ulSearch.appendChild(liElement);

    liElement.addEventListener('click', addRemoveItemsFav);
  }
}

//Función para crear la estructura html de toda la etiqueta ul (Array)
function renderDrinksList(list, isIntoFavList) {
  if (list !== null) {
    for (const drink of list) {
      renderDrink(drink, isIntoFavList);
    }
  }
}

//Función para añadir la clase 'selected' a los elementos de la lista de búsqueda
function addSelectedClass(item) {
  if (item !== null) {
    item.classList.add('selected');
  }
  showBtnResetFav();
}

//Función para quitar la clase 'selected' a los elementos de la lista de búsqueda
function removeSelectedClass(item) {
  if (item !== null) {
    item.classList.remove('selected');
  }
  showBtnResetFav();
}

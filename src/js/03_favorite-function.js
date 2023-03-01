'use strict';

//Función para añadir los elementos seleccionados a la lista de favoritos o quitarlos en caso de que ya estén en esa lista. También guarda en el localStorage la lista de favoritos generada
function addRemoveItemsFav(event) {
  ulFavorites.innerHTML = '';
  const idSelected = event.currentTarget.id;
  const selectedElement = searchList.find(
    (drink) => drink.idDrink === idSelected
  );
  const indexElement = favoritesList.findIndex(
    (drink) => drink.idDrink === idSelected
  );
  if (indexElement === -1) {
    favoritesList.push(selectedElement);
    addSelectedClass(event.currentTarget);
  } else {
    favoritesList.splice(indexElement, 1);
    removeSelectedClass(event.currentTarget);
  }

  localStorage.setItem('favList', JSON.stringify(favoritesList));

  renderDrinksList(favoritesList, true);
}

//Función que elimina los elementos de la lista de favoritos al hacer click sobre el icono del corazón roto
function handleClickBtnHeart(event) {
  const idBtnFav = event.currentTarget.id;
  const indexFavElement = favoritesList.findIndex(
    (drink) => drink.idDrink === idBtnFav
  );
  console.log(favoritesList[indexFavElement].strDrink);
  const elSearchSelected = ulSearch.querySelector(`[id='${idBtnFav}']`);

  if (indexFavElement !== -1) {
    favoritesList.splice(indexFavElement, 1);
    ulFavorites.innerHTML = '';
    localStorage.setItem('favList', JSON.stringify(favoritesList));
    renderDrinksList(favoritesList, true);
  }
  removeSelectedClass(elSearchSelected);
}

//Función para mostrar el botón de 'Borrar favoritos' solo en el caso en el que haya elementos en la lista
function showBtnResetFav() {
  if (favoritesList && favoritesList.length > 0) {
    btnResetFav.classList.remove('hidden');
  } else {
    btnResetFav.classList.add('hidden');
  }
}

'use strict';

//Función para borrar el texto escrito en el input
function handleClickResetInput(ev) {
  ev.preventDefault();
  inputSearch.value = '';
}

//Función para borrar todos los elementos de la lista de favoritos y el localStorage a la vez
function handleClickResetFav(ev) {
  ev.preventDefault();

  favoritesList = [];
  localStorage.clear('favList');

  ulFavorites.innerHTML = '';

  const ListSelected = ulSearch.querySelectorAll('.selected');
  for (const item of ListSelected) {
    removeSelectedClass(item);
  }
}

btnResetFav.addEventListener('click', handleClickResetFav);
btnReset.addEventListener('click', handleClickResetInput);

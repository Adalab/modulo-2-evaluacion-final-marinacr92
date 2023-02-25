'use strict';

function handleClickResetInput(ev) {
  ev.preventDefault();
  inputSearch.value = '';
}

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

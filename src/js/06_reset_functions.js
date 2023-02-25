'use strict';

function handleClickResetInput(ev) {
  ev.preventDefault();
  inputSearch.value = '';
}

function handleClickResetFav(ev) {
  ev.preventDefault();
  if (ulFavorites) {
    ulFavorites.innerHTML = '';
    favoritesList = [];
    localStorage.clear('favList');
  }
  painterSelected();
  console.log('favList', favoritesList);
}

btnResetFav.addEventListener('click', handleClickResetFav);
btnReset.addEventListener('click', handleClickResetInput);

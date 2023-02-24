'use strict';

const localStorageData = JSON.parse(localStorage.getItem('favList'));

if (localStorageData) {
  favoritesList = localStorageData;
  renderDrinksList(favoritesList, true);
} else {
  renderDrinksList(favoritesList, true);
}

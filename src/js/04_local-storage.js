'use strict';

//Condicional para que se recoja la información guardada en el localStorage solo si existe y que se 'pinte' en la lista de favoritos
const localStorageData = JSON.parse(localStorage.getItem('favList'));

if (localStorageData) {
  favoritesList = localStorageData;
  renderDrinksList(favoritesList, true);
}

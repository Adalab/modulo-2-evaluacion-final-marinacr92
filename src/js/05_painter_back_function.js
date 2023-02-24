'use strict';

function painterSelected() {
  console.log('search', localStorageData);
  console.log('fav', favoritesList);
  const liSearch = document.getElementsByClassName('li-search');

  for (const itemLocal of localStorageData) {
    for (const item of liSearch) {
      if (item.id === itemLocal.idDrink) {
        item.classList.add('selected');
      }
    }
  }
}

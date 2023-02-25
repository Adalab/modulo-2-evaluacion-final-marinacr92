'use strict';

function selectItems(event) {
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

function handleClickBtnX(event) {
  const idBtnFav = event.currentTarget.id;
  const indexFavElement = favoritesList.findIndex(
    (drink) => drink.idDrink === idBtnFav
  );
  const elSearchSelected = ulSearch.querySelector(`[id='${idBtnFav}']`);

  if (indexFavElement !== -1) {
    favoritesList.splice(indexFavElement, 1);
    ulFavorites.innerHTML = '';
    localStorage.setItem('favList', JSON.stringify(favoritesList));
    renderDrinksList(favoritesList, true);
  }
  removeSelectedClass(elSearchSelected);
}

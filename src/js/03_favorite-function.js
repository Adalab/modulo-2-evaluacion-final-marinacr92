'use strict';

let favoritesList = [];

function selectItems(event) {
  ulFavorites.innerHTML = '';
  console.log('current', event.currentTarget);
  const idSelected = event.currentTarget.id;
  console.log('ideSelected', idSelected);
  const selectedElement = searchList.find(
    (drink) => drink.idDrink === idSelected
  );
  console.log(selectedElement);
  const indexElement = favoritesList.findIndex(
    (drink) => drink.idDrink === idSelected
  );
  if (indexElement === -1) {
    favoritesList.push(selectedElement);
    event.currentTarget.classList.add('selected');
  } else {
    favoritesList.splice(indexElement, 1);
    event.currentTarget.classList.remove('selected');
  }
  console.log('favorites', favoritesList);
  renderDrinksList(favoritesList, true);
  localStorage.setItem('favList', JSON.stringify(favoritesList));
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

  if (elSearchSelected !== null) {
    elSearchSelected.classList.remove('selected');
  }
}

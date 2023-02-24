'use strict';

let favoritesList = [];
let selectedList = [];

function selectItems(event) {
  ulFavorites.innerHTML = '';
  const idSelected = event.currentTarget.id;
  /*const selectedDrink = event.currentTarget.cloneNode(true);
  if (favoritesList[idSelected] === undefined) {
    ulFavorites.appendChild(selectedDrink);
  }

  favoritesList[idSelected] = {
    title: selectedDrink.querySelector('h3').innerText,
    image: selectedDrink.querySelector('img').src,
  };*/

  console.log(idSelected);
  const selectedDrink = searchDrinksList.find(
    (drink) => drink.idDrink === idSelected
  );
  console.log(selectedDrink);
  const indexDrink = favoritesList.findIndex(
    (drink) => drink.idDrink === idSelected
  );
  if (indexDrink === -1) {
    favoritesList.push(selectedDrink);
    event.currentTarget.classList.add('selected');
    //paintSelected();
  } else {
    favoritesList.splice(indexDrink, 1);
    event.currentTarget.classList.remove('selected');
  }
  console.log('favorites', favoritesList);
  renderDrinksList(favoritesList, true);
  localStorage.setItem('favList', JSON.stringify(favoritesList));
}

// function paintSelected() {
//   const selectedItems = document.querySelectorAll('.select');
//   console.log('selectedItems', selectedItems);
//   localStorage.setItem('selectedList', JSON.stringify(selectedList));
// }

function handleClickBtnX(event) {
  console.log('target btn', event.currentTarget);
  const idFav = event.currentTarget.id;
  const selectedFav = favoritesList.find((fav) => fav.idDrink === idFav);
  console.log('selcted fav', selectedFav);

  const indexFav = favoritesList.findIndex((drink) => drink.idDrink === idFav);
  if (indexFav === -1) {
    favoritesList.push(selectedFav);
  } else {
    favoritesList.splice(indexFav, 1);
    event.currentTarget.classList.remove('selected');
  }
  ulFavorites.innerHTML = '';
  renderDrinksList(favoritesList, true);
  localStorage.setItem('favList', JSON.stringify(favoritesList));
}

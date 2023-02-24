'use strict';

let favoritesList = [];

function selectItems(event) {
  ulFavorites.innerHTML = '';
  event.currentTarget.classList.add('selected');
  console.log('current', event.currentTarget);
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
  } else {
    favoritesList.splice(indexDrink, 1);
    event.currentTarget.classList.remove('selected');
  }
  console.log('favorites', favoritesList);
  renderDrinksList(favoritesList, true);
}

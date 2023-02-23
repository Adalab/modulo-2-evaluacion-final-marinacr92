'use strict';

console.log('>> Ready :)');

const btnSearch = document.querySelector('.js-btn-search');
const btnReset = document.querySelector('.js-btn-reset');
const articleSearch = document.querySelector('.js-article-search-list');
const inputSearch = document.querySelector('.js-input-search');

function renderDrink(drink) {
  const drinkTagName = document.createElement('h3');
  const drinkName = document.createTextNode(drink.strDrink);
  drinkTagName.appendChild(drinkName);
  articleSearch.appendChild(drinkTagName);
  const drinkTagImg = document.createElement('img');
  drinkTagImg.setAttribute('src', drink.strDrinkThumb);
  drinkTagImg.style = 'width: 200px; height: 200px';
  articleSearch.appendChild(drinkTagImg);
}

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then((response) => response.json())
  .then((data) => {
    console.log(data.drinks);
    for (const drink of data.drinks) {
      renderDrink(drink);
    }
  });

function handleEnterKey(ev) {
  if (ev.keyCode === 13) {
    handleClickSearch(ev);
  }
}

function handleClickSearch(ev) {
  ev.preventDefault();
  articleSearch.innerHTML = '';
  const inputSearchValue = inputSearch.value;
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputSearchValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      for (const drink of data.drinks) {
        renderDrink(drink);
      }
    });
}

btnSearch.addEventListener('click', handleClickSearch);
document.addEventListener('keypress', handleEnterKey);

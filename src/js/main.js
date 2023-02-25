'use strict';

console.log('>> Ready :)');

let searchList = [];

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then((response) => response.json())
  .then((data) => {
    console.log('data.drinks', data.drinks);
    searchList = data.drinks;
    renderDrinksList(searchList);
    painterSelected();
  });

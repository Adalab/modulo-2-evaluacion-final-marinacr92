'use strict';

//Petición al servidor para que muestre una lista de cócteles que incluyen la palabra margarita nada más cargar la página
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then((response) => response.json())
  .then((data) => {
    console.log('data.drinks', data.drinks);
    searchList = data.drinks;
    renderDrinksList(searchList);
    addSelectedFromLocal();
  });

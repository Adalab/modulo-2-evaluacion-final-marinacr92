'use strict';

//Función para poder hacer la búsqueda al presionar la tecla 'Enter'
function handleEnterKey(ev) {
  if (ev.keyCode === 13) {
    handleClickSearch(ev);
  }
}

//Función para hacer la búsqueda al presionar el botón 'Buscar'
function handleClickSearch(ev) {
  ev.preventDefault();
  ulSearch.innerHTML = '';
  const inputValue = inputSearch.value;
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      searchList = data.drinks;
      renderDrinksList(searchList);
      addSelectedFromFavs();
    });
}

btnSearch.addEventListener('click', handleClickSearch);
document.addEventListener('keypress', handleEnterKey);

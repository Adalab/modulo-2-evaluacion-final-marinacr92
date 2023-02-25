'use strict';

function handleEnterKey(ev) {
  if (ev.keyCode === 13) {
    handleClickSearch(ev);
  }
}

function handleClickSearch(ev) {
  ev.preventDefault();
  ulSearch.innerHTML = '';
  const inputSearchValue = inputSearch.value;
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputSearchValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      searchList = data.drinks;
      renderDrinksList(searchList);
      painterSelected();
    });
}

btnSearch.addEventListener('click', handleClickSearch);
document.addEventListener('keypress', handleEnterKey);

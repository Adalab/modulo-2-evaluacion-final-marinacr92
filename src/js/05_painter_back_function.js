'use strict';

function addSelectedFromLocal() {
  if (localStorageData) {
    for (const item of localStorageData) {
      // Búsqueda de identificadores sobre el elemento ulSearch directamente porque si busca sobre el documento devuelve identificadores del ulFavorites ya que son los mismos
      const searchElement = ulSearch.querySelector(`[id='${item.idDrink}']`); // He tenido que añadir esa forma de búsqueda de id porque con # daba problemas al ser números https://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
      addSelectedClass(searchElement);
    }
  }
}

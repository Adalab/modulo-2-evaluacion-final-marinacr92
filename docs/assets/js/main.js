'use strict';
const btnSearch = document.querySelector('.js-btn-search'),
  btnReset = document.querySelector('.js-btn-reset'),
  ulSearch = document.querySelector('.js-ul-search-list'),
  ulFavorites = document.querySelector('.js-ul-favorite'),
  inputSearch = document.querySelector('.js-input-search'),
  btnResetFav = document.querySelector('.js-reset-fav');
let searchList = [],
  favoritesList = [];
function createImg(e) {
  const t = document.createElement('img');
  return (
    null === e
      ? t.setAttribute(
          'src',
          'https://via.placeholder.com/200x200/d3d3d3d3/666666/?text=Sin+foto'
        )
      : t.setAttribute('src', e),
    t.setAttribute('class', 'drink-img'),
    t
  );
}
function renderDrink(e, t) {
  const r = document.createElement('li'),
    s = document.createElement('article'),
    n = document.createElement('h3'),
    a = createImg(e.strDrinkThumb),
    i = document.createTextNode(e.strDrink);
  if (
    (r.setAttribute('id', e.idDrink),
    s.setAttribute('class', 'drink-article'),
    n.setAttribute('class', 'drink-name'),
    r.appendChild(s),
    s.appendChild(n),
    n.appendChild(i),
    t)
  ) {
    const t = document.createElement('div'),
      n = document.createElement('div'),
      i = document.createElement('i');
    t.setAttribute('class', 'container-img'),
      n.setAttribute('class', 'container-icon'),
      i.setAttribute('id', e.idDrink),
      i.setAttribute('class', 'fa-solid fa-heart-crack'),
      ulFavorites.appendChild(r),
      s.appendChild(t),
      t.appendChild(a),
      t.appendChild(n),
      n.appendChild(i),
      i.addEventListener('click', handleClickBtnHeart);
  } else
    s.appendChild(a),
      ulSearch.appendChild(r),
      r.addEventListener('click', addRemoveItemsFav);
}
function renderDrinksList(e, t) {
  if (null !== e) for (const r of e) renderDrink(r, t);
}
function addSelectedClass(e) {
  null !== e && e.classList.add('selected'), showBtnResetFav();
}
function removeSelectedClass(e) {
  null !== e && e.classList.remove('selected'), showBtnResetFav();
}
function handleEnterKey(e) {
  13 === e.keyCode && handleClickSearch(e);
}
function handleClickSearch(e) {
  e.preventDefault(), (ulSearch.innerHTML = '');
  const t = inputSearch.value;
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + t)
    .then((e) => e.json())
    .then((e) => {
      (searchList = e.drinks),
        renderDrinksList(searchList),
        addSelectedFromFavs();
    });
}
function addRemoveItemsFav(e) {
  ulFavorites.innerHTML = '';
  const t = e.currentTarget.id,
    r = searchList.find((e) => e.idDrink === t),
    s = favoritesList.findIndex((e) => e.idDrink === t);
  -1 === s
    ? (favoritesList.push(r), addSelectedClass(e.currentTarget))
    : (favoritesList.splice(s, 1), removeSelectedClass(e.currentTarget)),
    localStorage.setItem('favList', JSON.stringify(favoritesList)),
    renderDrinksList(favoritesList, !0);
}
function handleClickBtnHeart(e) {
  const t = e.currentTarget.id,
    r = favoritesList.findIndex((e) => e.idDrink === t),
    s = ulSearch.querySelector(`[id='${t}']`);
  -1 !== r &&
    (favoritesList.splice(r, 1),
    (ulFavorites.innerHTML = ''),
    localStorage.setItem('favList', JSON.stringify(favoritesList)),
    renderDrinksList(favoritesList, !0)),
    removeSelectedClass(s);
}
function showBtnResetFav() {
  favoritesList && favoritesList.length > 0
    ? btnResetFav.classList.remove('hidden')
    : btnResetFav.classList.add('hidden');
}
btnSearch.addEventListener('click', handleClickSearch),
  document.addEventListener('keypress', handleEnterKey);
const localStorageData = JSON.parse(localStorage.getItem('favList'));
function addSelectedFromFavs() {
  if (localStorageData)
    for (const e of localStorageData) {
      addSelectedClass(ulSearch.querySelector(`[id='${e.idDrink}']`));
    }
}
function handleClickResetInput(e) {
  e.preventDefault(), (inputSearch.value = '');
}
function handleClickResetFav(e) {
  e.preventDefault(),
    (favoritesList = []),
    localStorage.clear('favList'),
    (ulFavorites.innerHTML = '');
  const t = ulSearch.querySelectorAll('.selected');
  for (const e of t) removeSelectedClass(e);
}
localStorageData &&
  ((favoritesList = localStorageData), renderDrinksList(favoritesList, !0)),
  btnResetFav.addEventListener('click', handleClickResetFav),
  btnReset.addEventListener('click', handleClickResetInput),
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then((e) => e.json())
    .then((e) => {
      console.log('data.drinks', e.drinks),
        (searchList = e.drinks),
        renderDrinksList(searchList),
        addSelectedFromFavs();
    });

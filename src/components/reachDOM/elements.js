import $ from 'jquery';

let elements = {};

const classes = {
  listItemActive: 'list__item--active',
};

const selectors = {
  body: 'body',
  reachjs: '#reachjs',
  finderInput: '.reach-finder__input',
  foundList: '.items-found__list',
  reachjsClose: '.reachjs-fechar',
  listItem: '.items-found__list .list__item',
  firstItemList: '.items-found__list .list__item:first',
  listItemActive: '.list__item.list__item--active',
  container: '.reachjs-container',
};

export const selectElements = () => {
  elements = {
    body: $(selectors.body),
    reachjs: $(selectors.reachjs),
    finderInput: $(selectors.finderInput),
    foundList: $(selectors.foundList),
    reachjsClose: $(selectors.reachjsClose),
    listItem: $(selectors.listItem),
    firstItemList: $(selectors.firstItemList),
    listItemActive: $(selectors.listItemActive),
    container: $(selectors.container),
  };

  return elements;
};

export const getElements = (item = '', refresh = false) => {
  if (item && elements[item]) {
    if (refresh) {
      return $(selectors[item]);
    }

    return elements[item];
  }

  return elements;
};

export const getSelectors = (item = '') => {
  return item && selectors[item] ? selectors[item] : selectors;
};

export const getClasses = (item = '') => {
  return item && classes[item] ? classes[item] : classes;
};

export default {
  selectElements,
  getElements,
  getSelectors,
  getClasses,
};

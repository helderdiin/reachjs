import $ from 'jquery';

let elements = {};

const selectors = {
  body: 'body',
  reachjs: '#reachjs',
  finderInput: '.reach-finder__input',
  foundList: '.items-found__list',
  reachjsClose: '.reachjs-fechar',
  listItem: '.items-found__list .list__item',
};

export const selectElements = () => {
  elements = {
    body: $(selectors.body),
    reachjs: $(selectors.reachjs),
    finderInput: $(selectors.finderInput),
    foundList: $(selectors.foundList),
    reachjsClose: $(selectors.reachjsClose),
    listItem: $(selectors.listItem),
  };

  return elements;
};

export const getElements = (item = '') => {
  return item && elements[item] ? elements[item] : elements;
};

export const getSelectors = (item = '') => {
  return item && selectors[item] ? selectors[item] : selectors;
};

export default {
  selectElements,
  getElements,
  getSelectors,
};

import { cloneDeep } from 'lodash';
import localesTexts from '../i18n';

let texts = {};
let currentLocale = 'br';

export const setLocale = (locale = 'br') => {
  currentLocale = locale;
  texts = localesTexts[locale];
};

export const getLocale = () => {
  return currentLocale;
};

export const getTexts = () => {
  return cloneDeep(texts);
};

export const getText = (text = '') => {
  return text && texts[text] ? texts[text] : '';
};

export default {
  setLocale,
  getText,
};

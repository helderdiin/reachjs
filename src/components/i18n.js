import localesTexts from '../i18n';

let texts = {};

export const setLocale = (locale = 'br') => {
  texts = localesTexts[locale];
};

export const getText = (text = '') => {
  return text && texts[text] ? texts[text] : '';
};

export default {
  setLocale,
  getText,
};

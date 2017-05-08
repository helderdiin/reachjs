const map = { â: 'a', Â: 'A', à: 'a', À: 'A', á: 'a', Á: 'A', ã: 'a', Ã: 'A', ê: 'e', Ê: 'E', è: 'e', È: 'E', é: 'e', É: 'E', î: 'i', Î: 'I', ì: 'i', Ì: 'I', í: 'i', Í: 'I', õ: 'o', Õ: 'O', ô: 'o', Ô: 'O', ò: 'o', Ò: 'O', ó: 'o', Ó: 'O', ü: 'u', Ü: 'U', û: 'u', Û: 'U', ú: 'u', Ú: 'U', ù: 'u', Ù: 'U', ç: 'c', Ç: 'C' };

export const getKeyPressed = (e = {}) => {
  return e.keyCode ? e.keyCode : e.which;
};

export const removeWordAccentuation = (s = '') => {
  return s.replace(/[\W[\] ]/g, a => map[a] || a);
};

export default {
  getKeyPressed,
  removeWordAccentuation,
};

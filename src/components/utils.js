export const getKeyPressed = (e = {}) => {
  return e.keyCode ? e.keyCode : e.which;
};

export default {
  getKeyPressed
};
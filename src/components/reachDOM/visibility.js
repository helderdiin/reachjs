import {
  getElements,
} from './elements';

export const showReach = () => {
  getElements('reachjs').removeClass('invisible');
};

export const hideReach = () => {
  getElements('reachjs').addClass('invisible');
};

export default {
  showReach,
  hideReach,
};

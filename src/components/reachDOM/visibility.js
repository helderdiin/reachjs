import $ from 'jquery';

export const showReach = () => {
  $('#reachjs').removeClass('invisible');
};

export const hideReach = () => {
  $('#reachjs').addClass('invisible');
};

export default {
  showReach,
  hideReach,
};

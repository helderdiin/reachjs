import _ from 'lodash';

export const main = _.template(' \
<div id="reachjs" class="invisible reachjs-mask"> \
  <div class="reachjs-wrapper"> \
    <div class="reachjs-container"> \
      <div class="reachjs-header"><%= header %></div> \
      <div class="reachjs-body"><%= body %></div> \
      <div class="reachjs-footer"><%= footer %></div> \
    </div> \
  </div> \
</div>');

export const body = _.template(' \
<div class="reach-finder"> \
  <input class="reach-finder__input"/> \
</div> \
<div class="items-found"> \
  <ul class="items-found__list"> \
    <li> Digite algo para ser pesquisado... </li> \
  </ul> \
</div>');

export const itemFound = _.template('<li class="<%= data.customClass || \"list__item\" %>"><%= data.text %></li>');

export default {
  main,
  body,
  itemFound
};
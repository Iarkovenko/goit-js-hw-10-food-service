import { refs } from './constans';

import dishCardTemplate from '../templates/dish.hbs';
import dishes from '../menu.json';

const { $menuList } = refs;

function createMarkup() {
  return dishCardsTemplate(dishes);
}

function renderMarkup() {
  const markup = createMarkup();
  $menuList.insertAdjacentHTML('beforeed', markup);
}

renderMarkup();
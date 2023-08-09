import ContentPresenter from './presenter/content-presenter.js';
import { render } from './render.js';
import FilterView from './view/filter.js';
import SortView from './view/sort.js';

const pageMain = document.querySelector('.page-main');
const pageHeader = document.querySelector('.page-header');

const filtersContainer = pageHeader.querySelector('.trip-controls__filters');
const tripEventsContainer = pageMain.querySelector('.trip-events');

render(new FilterView(), filtersContainer);
render(new SortView(), tripEventsContainer);

const contentPresenter = new ContentPresenter({
  container: tripEventsContainer,
});
contentPresenter.init();

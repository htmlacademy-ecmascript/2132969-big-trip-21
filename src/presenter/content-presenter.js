import { render } from '../render.js';
import EventCreateView from '../view/event-create.js';
import EventEditView from '../view/event-edit.js';
import EventPointView from '../view/event-point.js';
import ContentListView from './../view/content-list.js';

export default class ContentPresenter {
  listContainer = new ContentListView();

  constructor({ container }) {
    this.container = container;
  }

  init() {
    render(this.listContainer, this.container);
    render(new EventCreateView(), this.listContainer.getElement());
    render(new EventEditView(), this.listContainer.getElement());
    for (let i = 0; i < 3; i++) {
      render(new EventPointView(), this.listContainer.getElement());
    }
  }
}

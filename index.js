import api from './api.js';
import store from './store.js';
import bookmarks from './bookmarks.js';

const main = function () {
  api.getBookmark()
    .then((items) => {
      items.forEach((item) => store.addBookmark(item));
      bookmarks.render();
    });

  bookmarks.bindEventListeners();
  bookmarks.render();
};

$(main);
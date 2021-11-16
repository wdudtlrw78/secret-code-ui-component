'use strict';

import getList from './listBuilder';

const listElem = document.querySelector('#list');

const renderItem = ({ id, no, text }) => {
  const li = document.createElement('li');
  li.insertAdjacentHTML(
    'beforeend',
    `
      <div class="no">${no}</div>
      <div class="content">
        <div class="_id">${id}</div>
        <div class="text">${text}</div>
      </div>
    `
  );
  return li;
};

const renderList = (page) => {
  const list = getList(page);

  const frag = document.createDocumentFragment();
  list.forEach((item) => frag.append(renderItem(item)));
  listElem.append(frag);
};

export default renderList;

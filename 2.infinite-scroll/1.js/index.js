'use strict';
import './style.css';
import renderList from './listRenderer';

const app = document.querySelector('#app');
const fetchMoreTrigger = document.querySelector('#fetchMore');

let page = 0;

const loadMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add('loading');
  await renderList(page++);
  target.classList.remove('loading');
};

const onScroll = (e) => {
  const { clientHeight, scrollTop, scrollHeight } = e.target.scrollingElement;
  if (scrollTop + clientHeight === scrollHeight) {
    loadMore();
  }
};

document.addEventListener('scroll', onScroll);
loadMore();

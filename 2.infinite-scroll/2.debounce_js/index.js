'use strict';
import './style.css';
import renderList from './listRenderer';
import { debounce } from './debounce';

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
  console.log(scrollTop);
  if (scrollTop + clientHeight === scrollHeight) {
    loadMore();
  }
};

document.addEventListener('scroll', debounce(onScroll, 300));
loadMore();

// 연속으로 발생하는 이벤트에 대해서

// throttle: 일정시간 간격으로 한 번씩만 실행
// debounce: 마지막 한 번만 실행

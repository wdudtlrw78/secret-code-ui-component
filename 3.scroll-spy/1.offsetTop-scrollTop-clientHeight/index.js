'use strict';
import './style.css';

const navElem = document.querySelector('#nav');
const navItems = Array.from(navElem.children);

const contentElem = document.querySelector('#contents');
const contentItems = Array.from(contentElem.children);

// 클로저를 이용해 매번 이벤트 발생 방지
const getOffsetTops = (() => {
  let offset = 0;
  let res = [];
  return () => {
    if (window.innerHeight === offset) {
      return res;
    }
    offset = window.innerHeight;
    res = contentItems.map((elem) => {
      const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
      return [ofs - clh / 2, ofs + clh / 2];
    });
    return res;
  };
})();

window.addEventListener('scroll', (e) => {
  const { scrollTop } = e.target.scrollingElement;
  const targetIndex = getOffsetTops().findIndex(
    // form: -468.5 to: 468.5
    ([from, to]) => scrollTop >= from && scrollTop < to
  );

  navItems.forEach((c, i) => {
    if (i !== targetIndex) c.classList.remove('on');
    else c.classList.add('on');
  });
});

navElem.addEventListener('click', (e) => {
  const targetElem = e.target;
  if (targetElem.tagName === 'BUTTON') {
    const targetIndex = navItems.indexOf(targetElem.parentElement);

    contentItems[targetIndex].scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }
});

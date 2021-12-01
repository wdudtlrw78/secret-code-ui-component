const nav = document.querySelector('nav');

// 첫 번째 방법
// 스크롤 이벤트가 발생했을 때

// 현재 스크롤 위치를 가져온다.

// 스크롤 위치를 바탕으로 active 클래스를 추가하거나 제거한다.

// Write JS Code Here!

function throttle(func, delay) {
  let throttled = false;

  return (...args) => {
    if (!throttled) {
      throttled = true;
      setTimeout(() => {
        func(...args);
        throttled = false;
      }, 300);
    }
  };
}

function handleScroll(e) {
  const { scrollTop } = e.target.scrollingElement;

  if (scrollTop === 0) {
    nav.classList.remove('active');
  } else {
    nav.classList.add('active');
  }
  console.log(e);
}

window.addEventListener('scroll', throttle(handleScroll, 300));

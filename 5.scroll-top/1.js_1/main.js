const nav = document.querySelector('nav');

// - 만약 특정 영역 안에서 스크롤 이벤트를 적용하고 싶다면 아래와 같이 변경합니다.

// ```js
// // 선택자로 특정 영역을 가리킨 후 스크롤 이벤트 추가
// const section1 = document.querySelector('#section-1');

// section1.addEventListener('scroll', function() {……})
// ```

// 첫번째 방법

// function throttle(func, delay) {
//   let throttled = false;

//   return (...args) => {
//     if (!throttled) {
//       throttled = true;
//       setTimeout(() => {
//         func(...args);
//         throttled = false;
//       }, delay);
//     }
//   };
// }

// function handleScroll(e) {
//   // const { scrollTop } = e.target.scrollingElement;
//   // 크로스브라우징 고려
//   const top =
//     window.scrollY ||
//     window.pageYOffset ||
//     document.documentElement.scrollTop ||
//     document.body.scrollTop;

//   top >= 50 ? nav.classList.add('active') : nav.classList.remove('active');
//   console.log(e);
// }

// window.addEventListener('scroll', throttle(handleScroll, 150));

// 두 번째 방법

// let oldValue = 0;
// window.addEventListener('scroll', function () {
//   const newValue =
//     window.scrollY ||
//     window.pageYOffset ||
//     document.documentElement.scrollTop ||
//     document.body.scrollTop;

//   // 음수 : 스크롤 다운
//   if (oldValue - newValue < 0) {
//     nav.classList.add('active');
//   }

//   // 양수 : 스크롤 업
//   if (oldValue - newValue > 0) {
//     nav.classList.remove('active');
//   }

//   oldValue = newValue;

//   console.log(oldValue, newValue);
// });

// 세 번째 방법
/*
window.addEventListener('wheel', mouseWheelEvent);
window.addEventListener('DOMMouseScroll', mouseWheelEvent);

function mouseWheelEvent(e) {
    const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
    (delta < 0)
        ? nav.classList.add('active')
        : nav.classList.remove('active');
}
*/

/*
// refactoring
const isFireFox = (navigator.userAgent.indexOf('Firefox') !== -1);
const wheelEvt = isFireFox ? 'DOMMouseScroll' : 'wheel';

window.addEventListener(wheelEvt, mouseWheelEvent);

function mouseWheelEvent(e) {
    const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
    (delta < 0)
        ? nav.classList.add('active')
        : nav.classList.remove('active');
}
*/

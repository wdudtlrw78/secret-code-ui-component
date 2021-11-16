// 클로저

export const debounce = (func, dealy) => {
  let timeoutId = null;

  return (...ages) => {
    // console.log(...ages); // onScroll(e)를 spraed로 받는다.
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...ages), dealy);
  };
};

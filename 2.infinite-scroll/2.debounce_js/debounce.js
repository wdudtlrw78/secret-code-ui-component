// 클로저

export const debounce = (func, dealy) => {
  let timeoutId = null;

  return (...ages) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...ages), dealy);
  };
};

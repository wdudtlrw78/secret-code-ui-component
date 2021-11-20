export const throttle = (func, delay) => {
  let throttled = false;
  // do something
  return (...args) => {
    if (!throttled) {
      throttled = true;
      setTimeout(() => {
        func(...args);
        throttled = false;
      }, delay);
    }
  };
};

export const debounce = (func, delay) => {
  let timeoutId = null;
  return (...arg) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...arg), delay);
  };
};

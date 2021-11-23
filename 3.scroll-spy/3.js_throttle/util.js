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
  // event: 0.1초 / 0.2초 / 0.3초
  // delay를 300으로 지정하면 최초 0.1초에 실행된 후 0.2, 3초는 무시되고 0.4초에 실행

  // throttle은 일정한 간격으로 발생해서 스크롤에 어울리고
  // debounce는 마지막에 한 번 실행되니깐 resize에 어울리다.
};

export const debounce = (func, delay) => {
  let timeoutId = null;
  return (...arg) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...arg), delay);
  };
};

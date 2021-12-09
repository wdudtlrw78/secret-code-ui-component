// 요구 사항은 다음과 같다.

// 1. 시계의 시침(.hand.hour 요소), 분침(.hand.minute 요소), 초침(.hand.second 요소)을
// 1초 간격으로 회전시켜 현재 시간을 표시한다.

const renderTime = (() => {
  const $hourHand = document.querySelector('.hand.hour');
  const $minuteHand = document.querySelector('.hand.minute');
  const $secondHand = document.querySelector('.hand.second');

  // 즉시실행 함수: 위의 3개는 1초당 렌더링이 될 필요가 없으므로 즉시실행함수를 사용해서 return 부분만 렌더링
  // 즉 클로저를 이용하여 상위스코프 위의 변수들을 참조한다
  return () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Updating a CSS variable(CSS custom property)
    // @see: https://css-tricks.com/updating-a-css-variable-with-javascript
    // 초침: 1초당 6도(360deg/60s) 회전
    $secondHand.style.setProperty('--deg', seconds * 6);
    // 분침: 1시간당 360도, 1분당 6도(360deg/60m), 1초당 0.1도(6deg/60s) 회전
    $minuteHand.style.setProperty('--deg', minutes * 6 + seconds * 0.1);
    // 시침: 1시간당 30도(360deg/12h), 1분당 0.5도(30deg/60m), 1초당 약 0.0083도(0.5deg/60s) 회전
    $hourHand.style.setProperty(
      '--deg',
      hours * 30 + minutes * 0.5 + seconds * (0.5 / 60)
    );
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  setInterval(renderTime, 1000);
});

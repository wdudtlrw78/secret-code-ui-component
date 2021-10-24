'use strict';

const details = document.querySelectorAll('details');

document.body.addEventListener('click', function (e) {
  if (e.target.nodeName !== 'P' && e.target.nodeName !== 'SUMMARY') {
    details.forEach((detail) => {
      detail.removeAttribute('open');
    });

    return;
  }
  details.forEach((detail) => {
    if (detail !== e.target.parentNode) detail.removeAttribute('open');
  });
});

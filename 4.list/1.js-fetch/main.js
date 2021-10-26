'use strict';

const ul = document.querySelector('ul');
const API = 'https://jsonplaceholder.typicode.com/posts';

// fetch(API)
//   .then((res) => res.json())
//   .then((data) =>
//     data.forEach((item) => {
//       const li = `
//       <li>
//         <h2>${item.title}</h2>
//         <p>${item.body}</p>
//       </lI>
//     `;

//       ul.insertAdjacentHTML('beforeend', li);
//     })
//   );

// Refactoring

// 통신 상태 처리
const checkStatusAndParse = (res) => {
  if (!res.ok) {
    throw Error(`예상하지 못한 HTTP Status(${res.status}) 응답 입니다.`);
  }

  return res.json();
};

// 템플릿
const printPosts = (data) => {
  data.forEach((item) => {
    const li = `<li>
    <h2>${item.title}</h2>
    <p>${item.body}</p>
</li>`;
    ul.insertAdjacentHTML('beforeend', li);
  });
};

// HTTP 통신
const fetchPosts = (url) => {
  return fetch(url);
};

fetchPosts(API)
  .then(checkStatusAndParse)
  .then(printPosts)
  .catch((e) => console.error(e));

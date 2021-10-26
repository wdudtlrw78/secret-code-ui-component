'use strict';

const ul = document.querySelector('ul');
const API = 'https://jsonplaceholder.typicode.com/posts';

fetch(API)
  .then((res) => res.json())
  .then((data) =>
    data.forEach((item) => {
      const li = `
      <li>
        <h2>${item.title}</h2>
        <p>${item.body}</p>
      </lI>
    `;

      ul.insertAdjacentHTML('beforeend', li);
    })
  );

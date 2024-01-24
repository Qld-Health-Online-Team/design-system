// src/main.js
import handlebarsTemplate from '/stories/header.hbs';

const data = {
    pageTitle: 'My Vite + Handlebars Project',
    greeting: 'Hello, world!',
};

document.getElementById('app').innerHTML = handlebarsTemplate(data);

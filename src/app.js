const animal = require("./animal.js");
const $ = require("jquery");
require("./css/style.css");

$("body").append(`<h1>${animal.name}</h1>`);

$.each(animal.food, function (key, value) {
  $("body").append(`<h2>${value}</h2>`);
});

function component() {
  const element = document.createElement("div");

  const name = animal.name;
  const list = animal.food.map((f) => `<li>${f}</li>`);
  const li = list.join("");
  element.innerHTML = `Hello Webpack! You are ${name}  <ul>${li}</ul>`;

  return element;
}

document.body.appendChild(component());

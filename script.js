var joke1 = "Why don’t pirates take a shower before they walk the plank? They just wash up on shore.";
var joke2 = "Why did the egg hide? It was a little chicken.";
var joke3 = "I wanted to buy some camo pants but couldn't find any.";


document.querySelector("#first").textContent = joke1;
document.querySelector("#second").textContent = joke2;
document.querySelector("#third").textContent = joke3;

const body = document.querySelector('body');
var ender = document.createElement('p');
ender.textContent = "That's all folks!";
body.appendChild(ender);
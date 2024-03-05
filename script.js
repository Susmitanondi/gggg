 const h1 = document.getElementById("heading");
 console.log((h1.innerHTML = "Susmita"));

 const h2 = document.getElementsByTagName("heading1");
 console.log(h2);

 const h3 = document.getElementsByClassName("heading2");
 console.log(h3);
const h4 = document.querySelector(".heading3");
h4.innerText = "Sorry";
h4.style.color = "green";
h4.style.backgroundColor = "blue";
h4.style.fontSize = "40px";

// h4.removeAttribute("style");
const btn = document.getElementById("btn");
btn.setAttribute("href", "https://google.com");
console.dir(h4);

const div = document.getElementById("div");
const xy = document.getElementById("xy");
const element = document.createElement("p");
element.innerText = "Mimi cute";

const heading = document.createElement("h1");
heading.innerHTML = "our country";
div.appendChild(element);
document.body.appendChild(element);

div.removeChild(element);
div.removeChild(xy);

div.replaceChild(heading, element);

let x = document.querySelector("#X");
let e = document.querySelector("#E");
let circle = document.querySelector(".circle");
let tadaa = document.querySelector(".tadaa");
let ul = document.querySelector("nav ul");
console.log(ul);

x.addEventListener("click", () => {
  circle.classList.remove("rotate");
  tadaa.classList.remove("shownav");
  ul.classList.add("hide");
});

e.addEventListener("click", () => {
  circle.classList.add("rotate");
  tadaa.classList.add("shownav");
  ul.classList.remove("hide");
});

ul.addEventListener("click", (event) => {
  ul.classList.add("hide");
  tadaa.classList.remove("shownav");
  circle.classList.remove("rotate");
});

const button = document.querySelector("#btn");
const body = document.querySelector("body");

const color = ["red","blue","green","yellow","pink","orange","wheat","purple"];

body.style.backgroundColor = "violet";

button.addEventListener("click",changeB)

function changeB() {
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];

}



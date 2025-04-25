let count = 0;

const button = document.getElementById("clickMe");
const counter = document.getElementById("count");

button.addEventListener("click", () => {
    count++;
    display.textContent = count;
});
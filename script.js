let count = 0;

const button = document.getElementById("clickMe");
const display = document.getElementById("count");

button.addEventListener("click", () => {
  count++;
  display.textContent = count;
});
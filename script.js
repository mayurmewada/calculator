// Clears the screen on click of C button.
function clearScreen() {
  document.getElementById("result").value = "";
}
// Displays entered value on screen.
function liveScreen(value) {
  document.getElementById("result").value += value;
}

let button = document.querySelector(".btn");

// press the button to toggle the .dark-mode class
button.addEventListener("click", () => {
  document.getElementsByTagName("body")[0].classList.toggle("dark-mode");
});

const screen = document.getElementById("screen");

function updateScreen(input) {
  screen.value += input;
}

function clearScreen() {
  screen.value = "";
}

function calc() {
  try {
    screen.value = eval(screen.value);
  }
  
  catch (error) {
    screen.value = "Error";
  }
}
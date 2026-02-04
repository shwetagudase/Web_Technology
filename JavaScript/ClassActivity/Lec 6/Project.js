 function changeText() {
  let message = document.getElementById("msg");
  message.innerHTML = "Welcome to JS DOM!";
  message.style.color = "blue";
}

function changeColor() {
  let message = document.getElementById("msg");
  message.style.backgroundColor = "red";
  message.style.padding="20px"
}

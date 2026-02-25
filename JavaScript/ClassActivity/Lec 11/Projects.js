const box = document.getElementById("box");
const arena = document.getElementById("arena");
let x = 180;
let y = 130;
const step = 10;
const maxX = arena.clientWidth - box.clientWidth;
const maxY = arena.clientHeight - box.clientHeight;
document.addEventListener("keydown", function (e) {
  switch (e.key.toLowerCase()) {
    case "w":
      y = Math.max(0, y - step);
      break;
    case "s":
      y = Math.min(maxY, y + step);
      break;
    case "a":
      x = Math.max(0, x - step);
      break;
    case "d":
      x = Math.min(maxX, x + step);
      break;
    case "t":
      toggleTheme();
      break;
    case "c":
      box.style.background = randomColor();
      break;
    case "r":
      resetBox();  
      break;
    case "h":
      alert("W A S D → Move\nT → Theme\nC → Color\nR → Reset");
  }

  updatePosition();
});

function toggleTheme() {
  if (document.body.style.background === "black") {
    document.body.style.background = "#f2f2f2";
    document.body.style.color = "black";
  } else {
    document.body.style.background = "black";
    document.body.style.color = "white";
  }
}

function randomColor() {
  return "hsl(" + Math.random() * 360 + ",70%,50%)";
}
function updatePosition() {
  box.style.left = x + "px";
  box.style.top = y + "px";
}
function resetBox() {
  x = 180;
  y = 130;
  box.style.background = "red";
  document.body.style.background = "#f2f2f2";
  document.body.style.color = "black";
  updatePosition();
}
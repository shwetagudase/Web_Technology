const btn = document.getElementById("themeBtn");
const body = document.body;

let isDark = false;

btn.addEventListener("click", function () {
  if (!isDark) {
    // Dark theme
    body.style.backgroundColor = "black";
    body.style.color = "white";
    isDark = true;
  } else {
    // Light theme
    body.style.backgroundColor = "white";
    body.style.color = "black";
    isDark = false;
  }
});
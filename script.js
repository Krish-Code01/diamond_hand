document.addEventListener("mousemove", parallax);
var timeoutId;
document.addEventListener("mousemove", function () {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(function () {
    front.classList.add("animate");
  }, 100); // Add class after 1 second of no mouse movement
});

function parallax(e) {
  document.querySelectorAll(".object").forEach(function (move) {
    var front = document.getElementById("front");
    front.classList.remove("animate");
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 200; // First variable x
    var y = (e.clientY * moving_value) / 200; // Second variable should be y, not x
    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

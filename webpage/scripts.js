document.addEventListener("DOMContentLoaded", function() {
  const knife = document.getElementById("knife");
  knife.addEventListener("animationend", function() {
    knife.style.display = "none";
  });
});

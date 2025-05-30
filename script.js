window.onload = function () {
  const heart = document.getElementById("heart");
  const message = document.getElementById("message");

  heart.addEventListener("click", () => {
    message.classList.remove("hidden");
  });
};
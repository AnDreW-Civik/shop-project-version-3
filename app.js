let liked = document.querySelectorAll(".like");

liked.forEach((item) =>
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  })
);

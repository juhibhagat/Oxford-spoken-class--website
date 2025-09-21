window.addEventListener("scroll", function () {
  const element = document.getElementById("bioImage");
  const position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("image-bio");
  }
});
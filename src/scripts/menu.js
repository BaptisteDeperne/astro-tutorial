if (
  document.querySelector(".hamburger") != null &&
  document.querySelector(".nav-links") != null
) {
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("expanded");
  });
}

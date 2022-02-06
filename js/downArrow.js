const moveDownArrow = document.getElementById("down-arrow-intro");

if (window.width > 800) {
  moveDownArrow.addEventListener("click", () => {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  });
} else {
  moveDownArrow.addEventListener("click", () => {
    window.scrollTo({
      top: window.innerHeight + 50,
      left: 0,
      behavior: "smooth",
    });
  });
}

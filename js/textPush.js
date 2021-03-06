const hoverTestText = document.querySelectorAll(".test");
const hoverTestTextOff = document.querySelectorAll(".test-off");
const hoverTestTextOn = document.querySelectorAll(".test-on");

hoverTestText.forEach((text) => {
  text.addEventListener("mouseenter", () => {
    text.classList.add("test-on");
  });

  text.addEventListener("mouseleave", () => {
    text.classList.add("test-off");
    text.classList.remove("test-on");
    setTimeout(() => {
      text.classList.remove("test-off");
    }, 250);
  });
});
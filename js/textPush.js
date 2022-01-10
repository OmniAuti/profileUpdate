const hoverTestText = document.querySelectorAll(".test");
const hoverTestTextOff = document.querySelectorAll(".test-off");
const hoverTestTextOn = document.querySelectorAll(".test-on");
const moveDownArrow = document.getElementById("down-arrow-intro");
const closeEmail = document.querySelector('.close-email-modal');

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


moveDownArrow.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight,
    left: 0,
    behavior: "smooth",
  }); 
})

closeEmail.addEventListener('click', () => {
  emailModal.classList.remove("active-email-modal"); 
})
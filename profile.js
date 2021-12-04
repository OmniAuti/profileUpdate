const card = document.querySelectorAll(".portfolio-deck");
const particleCont = document.getElementById("particles-js");
const contactCont = document.querySelector(".work-together");
const portfolioCont = document.querySelector(".portfolio-cont");
const contactCard = document.querySelector(".stuck");
const contactCardOn = document.querySelector(".stuck-on");
const designCard = document.querySelector(".stack");
const codeCard = document.querySelector(".stacked");

function openingContact() {
  card.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("theater");

      contactCard.classList.add("curtain-closed");
      card.classList.add("curtain-closed");

      if (designCard.classList.contains("theater")) {
        contactCard.classList.add("move-card-back");
        contactCardOn.classList.add("move-card-back");
        codeCard.classList.add("move-card-back");
      } else if (designCard.classList.contains("curtain-closed")) {
        contactCard.classList.remove("move-card-back");
        contactCardOn.classList.remove("move-card-back");
        codeCard.classList.remove("move-card-back");
        contactCard.classList.add("move-card-forward");
        contactCardOn.classList.add("move-card-forward");
        codeCard.classList.add("move-card-forward");

        setTimeout(() => {
          contactCard.classList.remove("move-card-forward");
          contactCardOn.classList.remove("move-card-forward");
          codeCard.classList.remove("move-card-forward");
        }, 1000);
      }

      if (codeCard.classList.contains("theater")) {
        contactCard.classList.add("move-card-back");
        contactCardOn.classList.add("move-card-back");
        designCard.classList.add("move-card-back");
      } else if (codeCard.classList.contains("curtain-closed")) {
        contactCard.classList.remove("move-card-back");
        contactCardOn.classList.remove("move-card-back");
        designCard.classList.remove("move-card-back");
        contactCard.classList.add("move-card-forward");
        contactCardOn.classList.add("move-card-forward");
        designCard.classList.add("move-card-forward");

        setTimeout(() => {
          contactCard.classList.remove("move-card-forward");
          contactCardOn.classList.remove("move-card-forward");
          designCard.classList.remove("move-card-forward");
        }, 1000);
      }

      setTimeout(() => {
        card.classList.remove("curtain-closed");
        contactCard.classList.remove("curtain-closed");
      }, 1000);
    });
  });
}

openingContact();

contactCard.addEventListener("click", () => {
  contactCard.classList.remove("border-on");
  contactCardOn.classList.remove("border-on");
  designCard.classList.remove("border-on");
  codeCard.classList.remove("border-on");

  setTimeout(() => {
    contactCard.classList.add("active-contact");
    contactCard.style.zIndex = "-1";
    contactCardOn.style.zIndex = "0";
  }, 300);

  contactCont.style.display = "block";
  contactCont.style.bottom = "0vh";

  setTimeout(() => {
    contactCont.style.transform = "translateY(0)";
  }, 250);

  window.scroll({
    top: window.innerHeight, 
    left: 0, 
    behavior: 'smooth'
  });

  portfolioCont.style.transform = "translateY(-50vh)";

  document.body.style.overflow = "hidden";
});

contactCardOn.addEventListener("click", () => {
  contactCard.classList.add("border-on");
  contactCardOn.classList.add("border-on");
  designCard.classList.add("border-on");
  codeCard.classList.add("border-on");

  contactCont.style.transform = "translateY(100vh)";

  contactCard.style.zIndex = "0";
  contactCardOn.style.zIndex = "-1";
  setTimeout(() => {
    contactCont.style.display = "none";
    portfolioCont.style.transform = "translateY(0vh)";
  }, 250);
  document.body.style.overflow = "scroll";
  document.body.style.overflowX = "hidden";
});

const card = document.querySelectorAll(".portfolio-deck");
const contactCont = document.querySelector(".work-together");
const portfolioCont = document.querySelector(".portfolio-cont");
const contactCard = document.querySelector(".stuck");
const contactLink = document.querySelector(".contact-link");
const designCard = document.querySelector(".stack");
const designLink = document.querySelector(".design-link");
const codeCard = document.querySelector(".stacked");
const codeLink = document.querySelector(".code-link");
const derp = document.querySelector(".derp");

// HANDLES OPENING CARD ANIMATIONS FOR CODE, DESIGN, CONTACT SECTIONS
function openingContact() {
  card.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("theater"); // ACTIVE ON SCREEN FRONT AND CENTER

      contactCard.classList.add("curtain-closed"); // MAKES OTHER ELEMENTS UNCLICKABLE
      card.classList.add("curtain-closed"); // MAKES OTHER ELEMENTS UNCLICKABLE

      if (designCard.classList.contains("theater")) {
        designCard.style.height = null; // WIPES ELEMENT.STYLE SETTINGS
        designCard.style.width = null;
        designCard.style.left = null;
        designCard.style.top = null;
        contactCard.classList.add("move-card-back"); // ANIMATION TO MOVE UNUSED CARDS OUT OF VIEW
        codeCard.classList.add("move-card-back");
        setScrollOnOpenTheater();
      } else if (designCard.classList.contains("curtain-closed")) {
        designCard.style.height = fullVH - 5 + "px"; // RESETS ELEMENT.STYLE SETTINGS
        designCard.style.width = fullVH - 5 + "px";
        designCard.style.left = -(fullVH / 2) - 50 + "px";
        designCard.style.top = fullVH / 2 + "px";
        contactCard.classList.remove("move-card-back");
        codeCard.classList.remove("move-card-back");
        contactCard.classList.add("move-card-forward"); // ANIMATION TO MOVE UNUSED CARDS INTO VIEW AS CURRENT SELECTION CLOSES
        codeCard.classList.add("move-card-forward");
        document.body.style.overflow = "scroll"; // RESETS LOCKED SCROLL
        document.body.style.overflowX = "hidden";
        setTimeout(() => {
          // REMOVES ANIMATION AS ANIMATION COMPLETES FORWARD
          contactCard.classList.remove("move-card-forward");
          codeCard.classList.remove("move-card-forward");
        }, 1000);
      }

      if (codeCard.classList.contains("theater")) {
        // REPEATS SAME MOTIONS BUT FOR CODE CARD
        codeCard.style.height = null; // WIPES ELEMENT.STYLE SETTINGS
        codeCard.style.width = null;
        codeCard.style.left = null;
        codeCard.style.top = null;
        contactCard.classList.add("move-card-back");
        designCard.classList.add("move-card-back");
        setScrollOnOpenTheater();
      } else if (codeCard.classList.contains("curtain-closed")) {
        codeCard.style.height = fullVH - 5 + "px";  // RESETS ELEMENT.STYLE SETTINGS
        codeCard.style.width = fullVH - 5 + "px";
        codeCard.style.left = -(fullVH / 2) - 100 + "px";
        codeCard.style.top = fullVH / 2 + "px";
        contactCard.classList.remove("move-card-back");
        designCard.classList.remove("move-card-back");
        contactCard.classList.add("move-card-forward");
        designCard.classList.add("move-card-forward");
        document.body.style.overflow = "scroll"; // RESETS LOCKED SCROLL
        document.body.style.overflowX = "hidden";
        setTimeout(() => {
          contactCard.classList.remove("move-card-forward");
          designCard.classList.remove("move-card-forward");
        }, 1000);
      }
      // REMOVES UNCLICKABLE CLASS
      setTimeout(() => {
        card.classList.remove("curtain-closed");
        contactCard.classList.remove("curtain-closed");
      }, 1000);
    });
  });
}

openingContact();
// HANDLES CONTACT CARD LOGISTICS
contactCard.addEventListener("click", () => {
  if (contactCard.classList.contains("active-contact")) {
    // CHECK FOR ACTIVE CONTACT
    contactCard.classList.add("border-on"); // SETS BORDERS OF CARDS
    designCard.classList.add("border-on");
    codeCard.classList.add("border-on");
    // THIS IS ANIMATION FOR LINKS WHEN CONTACT CARD OPEN
    contactLink.classList.remove("active-contact-link");
    contactLink.classList.add("reverse-contact-link");
    designLink.classList.remove("active-design-link");
    designLink.classList.add("reverse-design-link");
    codeLink.classList.remove("active-code-link");
    codeLink.classList.add("reverse-code-link");
    setTimeout(() => {
      contactLink.innerText = "Contact"; // CHANGES INNER TEXT TO ORIGINAL
    }, 500);

    derp.style.transform = "translateY(100vh)"; // TAKES OUT HEADER OF CONTACT SECTION
    contactCont.style.zIndex = "-1";

    portfolioCont.style.transform = "translateY(0vh)"; // BRINGS BACK PORTFOLIO SECTION TO ORIGINAL POSITION

    document.body.style.overflow = "scroll"; // RESETS LOCKED SCROLL
    document.body.style.overflowX = "hidden";
    contactCard.classList.remove("active-contact");
  } else {
    contactCard.classList.add("active-contact");

    // THIS IS ANIMATION FOR LINKS WHEN CONTACT CARD OPEN
    contactLink.classList.add("active-contact-link");
    contactLink.classList.remove("reverse-contact-link");
    designLink.classList.add("active-design-link");
    designLink.classList.remove("reverse-design-link");
    codeLink.classList.add("active-code-link");
    codeLink.classList.remove("reverse-code-link");

    setTimeout(() => {
      contactLink.innerText = "Return"; // CHANGES INNER TEXT TO RETURN LINK
    }, 500);

    contactCard.classList.remove("border-on");
    designCard.classList.remove("border-on");
    codeCard.classList.remove("border-on");

    setScrollOnOpenTheater()

    derp.style.transform = "translate(0vh)"; // BRINGS IN HEADER OF SECTION
    contactCont.style.zIndex = "0";
    portfolioCont.style.transform = "translateY(-50vh)"; // LIFTS UP PROTFOLIO SECTION TO GIVE FEEL OF MOVEMENT
  }
});

function setScrollOnOpenTheater() {
  document.body.style.overflow = "hidden";
  window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" }); // FORCED SCROLL TO CONTACT SECTION
}

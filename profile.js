// HANDLES OPENING CARD ANIMATIONS FOR CODE, DESIGN, CONTACT SECTIONS --------------------------

// SECTIONS OR CONTAINERS
const contactCont = document.querySelector(".contact-cont");
const portfolioCont = document.querySelector(".portfolio-cont");
// CARD
const contactCard = document.querySelector(".stuck");
const designCard = document.querySelector(".stack");
const codeCard = document.querySelector(".stacked");
// LINKS
const contactLink = document.querySelector(".contact-link");
const designLink = document.querySelector(".design-link");
const codeLink = document.querySelector(".code-link");
// CONTACT SECTION CONTENT
const aboutMeTitle = document.querySelector(".about-me-title");
const derp = document.querySelector(".derp");
// CLOSE BUTTONS
const designCloseBtn = document.querySelector(".design-close-btn");
const codeCloseBtn = document.querySelector(".code-close-btn");
// CLOSE BTN FUNCTIONS
function handleDesignCloseBtn() {
  if (designCard.classList.contains("theater")) {
    //CHECK IF ACTIVE CARD
    designCard.classList.add("close-theater"); // ADD CLASS TO CATCH SIZE RESET IF/ELSE
    setHieghts();
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    }); // FORCED SCROLL TO CONTACT SECTION
    contactCard.classList.remove("move-card-back");
    codeCard.classList.remove("move-card-back");
    contactCard.classList.add("move-card-forward"); // ANIMATION TO MOVE UNUSED CARDS INTO VIEW AS CURRENT SELECTION CLOSES
    codeCard.classList.add("move-card-forward");
    designCard.classList.remove("theater");
    setTimeout(() => {
      aboutMeTitle.style.zIndex = 1;
      document.body.style.overflow = "scroll"; // RESETS LOCKED SCROLL
      document.body.style.overflowX = "hidden";
      // REMOVES ANIMATION AS ANIMATION COMPLETES FORWARD
      contactCard.classList.remove("move-card-forward");
      codeCard.classList.remove("move-card-forward");
      designCard.classList.remove("close-theater");
    }, 1000);
  }
}
function handleCodeCloseBtn() {
  if (codeCard.classList.contains("theater")) {
    //CHECK IF ACTIVE CARD
    codeCard.classList.add("close-theater"); // ADD CLASS TO CATCH SIZE RESET IF/ELSE
    setHieghts();
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    }); // FORCED SCROLL TO CONTACT SECTION
    contactCard.classList.remove("move-card-back");
    designCard.classList.remove("move-card-back");
    contactCard.classList.add("move-card-forward");
    designCard.classList.add("move-card-forward");
    codeCard.classList.remove("theater");
    setTimeout(() => {
      aboutMeTitle.style.zIndex = 1;
      document.body.style.overflow = "scroll"; // RESETS LOCKED SCROLL
      document.body.style.overflowX = "hidden";
      // REMOVES ANIMATION AS ANIMATION COMPLETES FORWARD
      contactCard.classList.remove("move-card-forward");
      designCard.classList.remove("move-card-forward");
      codeCard.classList.remove("close-theater");
    }, 1000);
  }
}
// ACTIVE CONTACT HANDLERS
function handleContactActiveDesignCard() {
  if (contactCard.classList.contains("active-contact")) {
    designLink.style.opacity = 0;
    codeLink.style.opacity = 0;
    handleContact();
    setTimeout(() => {
      designLink.style.opacity = 1;
      codeLink.style.opacity = 1;
    }, 1000);
  }

  if (!this.classList.contains("close-theater")) {
    this.classList.add("theater"); // MAKE CARD ACTIVE - FRONT AND CENTER
  }

  this.classList.add("curtain-closed"); // MAKES OTHER ELEMENTS UNCLICKABLE DURING TRANSITION

  if (designCard.classList.contains("theater")) {
    aboutMeTitle.style.zIndex = -1;
    designCard.style.height = null; // WIPES ELEMENT.STYLE SETTINGS
    designCard.style.width = null;
    designCard.style.left = null;
    designCard.style.top = null;
    contactCard.classList.add("move-card-back"); // ANIMATION TO MOVE UNUSED CARDS OUT OF VIEW
    codeCard.classList.add("move-card-back");
    setScrollOnOpenTheater();
  }
  setTimeout(() => {
    designCard.classList.remove("curtain-closed");
    contactCard.classList.remove("curtain-closed");
  }, 1000);
}
function handleContactActiveCodeCard() {
  if (contactCard.classList.contains("active-contact")) {
    designLink.style.opacity = 0;
    codeLink.style.opacity = 0;
    handleContact();
    setTimeout(() => {
      designLink.style.opacity = 1;
      codeLink.style.opacity = 1;
    }, 1000);
  }

  if (!this.classList.contains("close-theater")) {
    this.classList.add("theater"); // MAKE CARD ACTIVE - FRONT AND CENTER
  }

  this.classList.add("curtain-closed"); // MAKES OTHER ELEMENTS UNCLICKABLE DURING TRANSITION

  if (codeCard.classList.contains("theater")) {
    aboutMeTitle.style.zIndex = -1;
    // REPEATS SAME MOTIONS BUT FOR CODE CARD
    codeCard.style.height = null; // WIPES ELEMENT.STYLE SETTINGS
    codeCard.style.width = null;
    codeCard.style.left = null;
    codeCard.style.top = null;
    contactCard.classList.add("move-card-back");
    designCard.classList.add("move-card-back");
    setScrollOnOpenTheater();
  }

  // REMOVES UNCLICKABLE CLASS
  setTimeout(() => {
    this.classList.remove("curtain-closed");
    contactCard.classList.remove("curtain-closed");
  }, 1000);
}
// CONTACT ALL FUNCTION ACTIVE/NONACTIVE
function handleContact() {
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

    setScrollOnOpenTheater();

    derp.style.transform = "translate(0vh)"; // BRINGS IN HEADER OF SECTION
    contactCont.style.zIndex = "0";
    portfolioCont.style.transform = "translateY(-50vh)"; // LIFTS UP PROTFOLIO SECTION TO GIVE FEEL OF MOVEMENT
  }
}
// SCROLL RESET FUNCTION
function setScrollOnOpenTheater() {
  document.body.style.overflow = "hidden";
  window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" }); // FORCED SCROLL TO CONTACT SECTION
}
// CLOSE BTN EVENTS
designCloseBtn.addEventListener("click", handleDesignCloseBtn);
codeCloseBtn.addEventListener("click", handleCodeCloseBtn);
// DESIGN/CODE CARD CLICK EVENTS
designCard.addEventListener("click", handleContactActiveDesignCard);
codeCard.addEventListener("click", handleContactActiveCodeCard);
// CONTACT CARD CLICK EVENT
contactCard.addEventListener("click", handleContact);


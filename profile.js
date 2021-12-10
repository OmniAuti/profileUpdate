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
// LINKS FOR UI DISABLE
const contactTabLink = document.querySelector(".contact-tab-link");
const designTabLink = document.querySelector(".design-tab-link");
const codeTabLink = document.querySelector(".code-tab-link");
// CONTACT SECTION CONTENT
const aboutMeTitle = document.querySelector(".about-me-title");
const derp = document.querySelector(".derp");
// CLOSE BUTTONS
const designCloseBtn = document.querySelector(".design-close-btn");
const codeCloseBtn = document.querySelector(".code-close-btn");


// CLOSE BTN FUNCTIONS
function handleDesignCloseBtn() {
  if (designCard.classList.contains("theater")) {
    contactTabLink.setAttribute("tabindex", "0"); // ENABLE CONTACT LINK
    codeTabLink.setAttribute("tabindex", "0"); // ENABLE CODE LINK
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
    designCard.classList.remove("theater"); // REMOVES MAIN FOCUS CLASS
    setTimeout(() => {
      designCloseBtn.setAttribute("tabindex", "-1"); // DISABLE TABABLE CLOSE BTN OFF SCREEN
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
    contactTabLink.setAttribute("tabindex", "0"); // ENABLE LINKS
    designTabLink.setAttribute("tabindex", "0");
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
    deleteGuts();
    setTimeout(() => {
      codeCloseBtn.setAttribute("tabindex", "-1"); // GET RID OF CLOSE BTN
      codeProjectDownBtn.setAttribute("tabindex", "-1"); // GET RID OF CLOSE BTN
      codeProjectUpBtn.setAttribute("tabindex", "-1"); // GET RID OF CLOSE BTN
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
function handleActiveDesignCard() {
  //AVOID DOUBLE DECLARATIONS
  if (designCard.classList.contains("theater")) {
    return;
  }

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
    // SET ACTIVE TAB ABLE LINKS
    designCloseBtn.setAttribute("tabindex", "0"); // BRING UP CLOSE BTN
    contactTabLink.setAttribute("tabindex", "-1"); // DISABLE CONTACT LINK
    codeTabLink.setAttribute("tabindex", "-1"); // DISABLE CODE LINK

    aboutMeTitle.style.zIndex = -1;
    designCard.style.height = null; // WIPES ELEMENT.STYLE SETTINGS
    designCard.style.width = null;
    designCard.style.left = null;
    designCard.style.top = null;
    contactCard.classList.add("move-card-back"); // ANIMATION TO MOVE UNUSED CARDS OUT OF VIEW
    codeCard.classList.add("move-card-back");
    setScrollOnOpenTheater();
  }
  // REMOVES UNCLICKABLE CLASS
  setTimeout(() => {
    designCard.classList.remove("curtain-closed");
    contactCard.classList.remove("curtain-closed");
  }, 1000);
}
function handleActiveCodeCard() {
  //AVOID DOUBLE DECLARATIONS
  if (codeCard.classList.contains("theater")) {
    return;
  }
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

  this.classList.add("curtain-closed"); // MAKES OTHER ELEMENTS UNCLICKABLE DURING TRANSITIONS

  if (codeCard.classList.contains("theater")) {
    // SET ACTIVE TAB ABLE LINKS
    codeCloseBtn.setAttribute("tabindex", "0"); // BRING UP CLOSE BTN
    codeProjectDownBtn.setAttribute("tabindex", "0"); // BRING UP CLOSE BTN
    codeProjectUpBtn.setAttribute("tabindex", "0"); // BRING UP CLOSE BTN
    contactTabLink.setAttribute("tabindex", "-1"); // DISABLE CONTACT LINK
    designTabLink.setAttribute("tabindex", "-1"); // DISABLE CODE LINK

    aboutMeTitle.style.zIndex = -1;
    // REPEATS SAME MOTIONS BUT FOR CODE CARD
    codeCard.style.height = null; // WIPES ELEMENT.STYLE SETTINGS
    codeCard.style.width = null;
    codeCard.style.left = null;
    codeCard.style.top = null;
    contactCard.classList.add("move-card-back");
    designCard.classList.add("move-card-back");
    setScrollOnOpenTheater();
    createCodeGuts();
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
designCard.addEventListener("click", handleActiveDesignCard);
codeCard.addEventListener("click", handleActiveCodeCard);
// CONTACT CARD CLICK EVENT
contactCard.addEventListener("click", handleContact);

function createCodeGuts() {
  setTimeout(() => {
    const guts = document.createElement("div");
    guts.classList.add("stacked-guts");
    guts.innerHTML = portfolioCardDeckArr[0];
    codeCard.appendChild(guts);
  }, 1000);
  setTimeout(() => {
    const scripty = document.createElement("script");
    scripty.setAttribute("src", "js/projectCard.js");
    scripty.classList.add("project-card-script");
    document.body.appendChild(scripty);
  }, 1250);
}

function deleteGuts() {
  const gut = document.querySelector(".stacked-guts");
  gut.remove();
  const scripty = document.querySelector(".project-card-script");
  scripty.remove();
}

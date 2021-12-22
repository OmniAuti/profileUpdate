// HANDLES OPENING CARD ANIMATIONS FOR CODE, DESIGN, CONTACT SECTIONS --------------------------

// PORTFOLIO - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
// ABOUT ME SECTION CONTENT
const aboutMeCont = document.querySelector(".about-me-cont");
const aboutMeTitle = document.querySelector(".about-me-title");
// CONTACT SECTION CONTENT
const contactCont = document.querySelector(".contact-cont");
const contactTitle = document.querySelector(".contact-title");
const gitHubContact = document.querySelector('.gitHub-cont')
const emailContact = document.querySelector('.email-cont')
const linkedinContact = document.querySelector('.linkedin-cont')
// CLOSE BUTTONS
const designCloseBtn = document.querySelector(".design-close-btn");
const codeCloseBtn = document.querySelector(".code-close-btn");

// CLOSE BTN FUNCTIONS
function handleDesignCloseBtn() {
  if (designCard.classList.contains("theater")) {
    contactTabLink.setAttribute("tabindex", "0"); // ENABLE CONTACT LINK
    codeTabLink.setAttribute("tabindex", "0"); // ENABLE CODE LINK
    designTabLink.setAttribute("tabindex", "0"); // ENABLE DESIGN LINK
    //CHECK IF ACTIVE CARD
    designCard.classList.add("close-theater"); // ADD CLASS TO CATCH SIZE RESET IF/ELSE
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    }); // FORCED SCROLL TO CONTACT SECTION

    aboutMeCont.style.transform = null;

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
    deleteGutsClose(); // GETS RID OF CURRENT PROJECT ON SCREEN
    projectInfoCont.style.transform = null // RESETS PROJECT INFORMATION BACK OUT OF VIEW
    contactTabLink.setAttribute("tabindex", "0"); // ENABLE LINKS
    designTabLink.setAttribute("tabindex", "0");
    codeTabLink.setAttribute("tabindex", "0");
    //CHECK IF ACTIVE CARD
    codeCard.classList.add("close-theater"); // ADD CLASS TO CATCH SIZE RESET IF/ELSE
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    }); // FORCED SCROLL TO CONTACT SECTION

    aboutMeCont.style.transform = null;

    contactCard.classList.remove("move-card-back");
    designCard.classList.remove("move-card-back");
    contactCard.classList.add("move-card-forward");
    designCard.classList.add("move-card-forward");
    codeCard.classList.remove("theater");
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

  this.classList.add("curtain-closed"); // MAKES OTHER ELEMENTS UNCLICKABLE DURING TRANSITION
  codeCard.classList.add("curtain-closed")
  contactCard.classList.add("curtain-closed")
 

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

  if (designCard.classList.contains("theater")) {
    // SET ACTIVE TAB ABLE LINKS
    designCloseBtn.setAttribute("tabindex", "0"); // BRING UP CLOSE BTN
    contactTabLink.setAttribute("tabindex", "-1"); // DISABLE CONTACT LINK
    codeTabLink.setAttribute("tabindex", "-1"); // DISABLE CODE LINK
    designTabLink.setAttribute("tabindex", "-1"); // DISABLE DESIGN LINK

    aboutMeTitle.style.zIndex = -1;
    designCard.style.height = null; // WIPES ELEMENT.STYLE SETTINGS
    designCard.style.width = null;
    designCard.style.left = null;
    designCard.style.top = null;
    contactCard.classList.add("move-card-back"); // ANIMATION TO MOVE UNUSED CARDS OUT OF VIEW
    codeCard.classList.add("move-card-back");
    setScrollOnOpenTheater();
    aboutMeCont.style.transform = "translateX(200vh)";
  }
  // REMOVES UNCLICKABLE CLASS
  setTimeout(() => {
    designCard.classList.remove("curtain-closed");
    codeCard.classList.remove("curtain-closed")
    contactCard.classList.remove("curtain-closed");
  }, 1000);
}
function handleActiveCodeCard() {

  //AVOID DOUBLE DECLARATIONS
  if (codeCard.classList.contains("theater")) {
    return;
  }

  this.classList.add("curtain-closed"); // MAKES OTHER ELEMENTS UNCLICKABLE DURING TRANSITIONS
  designCard.classList.add("curtain-closed")
  contactCard.classList.add("curtain-closed")

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

  if (codeCard.classList.contains("theater")) {
    projectDetailsFirstOpen()
    // SET ACTIVE TAB ABLE LINKS
    codeCloseBtn.setAttribute("tabindex", "0"); // BRING UP CLOSE BTN
    codeProjectDownBtn.setAttribute("tabindex", "0"); // BRING UP CLOSE BTN
    codeProjectUpBtn.setAttribute("tabindex", "0"); // BRING UP CLOSE BTN
    contactTabLink.setAttribute("tabindex", "-1"); // DISABLE CONTACT LINK
    designTabLink.setAttribute("tabindex", "-1"); // DISABLE DESIGN LINK
    codeTabLink.setAttribute("tabindex", "-1"); // DISABLE CODE LINK

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
    aboutMeCont.style.transform = "translateX(200vw)";
  }
  // REMOVES UNCLICKABLE CLASS
  setTimeout(() => {
    this.classList.remove("curtain-closed");
    designCard.classList.remove("curtain-closed")
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

    setTimeout(() => {
      aboutMeCont.style.transform = null; // NULL THIS TRANSFORM SO CSS PRESET WORKS
    }, 250);
    
    contactTitle.style.transform = "translateX(100vw)"; // TAKES OUT HEADER OF CONTACT SECTION

     gitHubContact.setAttribute("tabindex", "-1")
     emailContact.setAttribute("tabindex", "-1")
     linkedinContact.setAttribute("tabindex", "-1")
      gitHubContact.style.transform = "translateY(100vh)"; //SETTIME FOR LINK TIMED TRANSITION
      emailContact.style.transform = "translateY(100vh)"; 
      linkedinContact.style.transform = "translateY(100vh)"; 
  
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
   
    aboutMeCont.style.transform = "translateY(-100vh)";
    setTimeout(() => {
      linkedinContact.style.transform = "translateY(0vh)"; 
    },100)
    setTimeout(() => {
      emailContact.style.transform = "translateY(0vh)"; 
    }, 200)
    setTimeout(() => {
      gitHubContact.style.transform = "translateY(0vh)"; //SETTIME FOR LINK TIMED TRANSITION
    }, 300);
    gitHubContact.setAttribute("tabindex", "0")
    emailContact.setAttribute("tabindex", "0")
    linkedinContact.setAttribute("tabindex", "0")

    contactCont.style.zIndex = "0";
    
    if (window.innerWidth > 750) {
      contactTitle.style.transform = "translateX(0vw)"; // BRINGS IN HEADER OF SECTION
      portfolioCont.style.transform = "translateY(-50vh)"; // LIFTS UP PROTFOLIO SECTION TO GIVE FEEL OF MOVEMENT
    } 
    else 
    {
      setTimeout(() => {
        contactTitle.style.transform = "translateX(0vw)"; // BRINGS IN HEADER OF SECTION
      }, 500);
      portfolioCont.style.transform = null;
    }
  }
}
// SCROLL RESET FUNCTION
function setScrollOnOpenTheater() {
  if (window.innerWidth < 750) {
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: (window.innerHeight + 50), left: 0, behavior: "smooth" }); // FORCED SCROLL TO CONTACT SECTION
  } 
  else 
  {
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" }); // FORCED SCROLL TO CONTACT SECTION
  }

}
// CLOSE BTN EVENTS
designCloseBtn.addEventListener("click", handleDesignCloseBtn);
codeCloseBtn.addEventListener("click", handleCodeCloseBtn);
// DESIGN/CODE CARD CLICK EVENTS
designCard.addEventListener("click", handleActiveDesignCard);
codeCard.addEventListener("click", handleActiveCodeCard);
// CONTACT CARD CLICK EVENT
contactCard.addEventListener("click", handleContact);




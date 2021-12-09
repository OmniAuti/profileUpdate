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
const codeProjectUpBtn = document.querySelector(".code-project-less-btn");
const codeProjectDownBtn = document.querySelector(".code-project-add-btn");

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
    scripty.setAttribute("src", "projectCard.js");
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

var deadCatCard = `
<div class="project-card">
  <div class="card-inner">
    <div class="header">
      <p>Home</p>
      <p>Info</p>
      <p>Download</p>
    </div>
    <div class="card-title">
      <h1>Dead Cat</h1>
      <p>- Here for the pounce</p>
    </div>
    <div class="project-card-logo">
    </div>
  </div>
  <h3></h3>
</div>`;

var studioSilenceCard = `      
<div class="card">
<div class="card-inner-studio-silence">
  <div class="title-studio-silence">
    <img class="studio-title-studio-silence" src="imgsProfileCards/studioH1.png" alt="" />
    <img class="silence-title-studio-silence" src="imgsProfileCards/SilenceH1.png" alt="" />
  </div>
  <div class="square-studio-silence"></div>
</div>
</div>`;

var madBatterCard = `
    <div class="card">
      <div class="card-inner-mad-bat">
        <div class="hero-mad-bat">
      
        </div>
        <h1 class="header-mad-bat">
          <div>The</div>
          <div>Mad</div>
          <div>Batter</div>
        </h1>

        <div class="cart-mad-bat">

          <div class="cart-item-mad-bat">
            <div class="trash-mad-bat"></div>
            <p>1</p>
            <p>x</p>
            <div class="order-cont-mad-bat">
              <p>The Original</p>
              <h6>Maple Syrup, Bananas</h6>
            </div>
            <div class="price-cont">
              <p>$10.15</p>
            </div>
          </div>

          <div class="cart-item-mad-bat">
            <div class="trash-mad-bat"></div>
            <p>2</p>
            <p>x</p>
            <div class="order-cont-mad-bat">
              <p>Eggs</p>
              <h6>Sunny Side Up</h6>
            </div>
            <div class="price-cont">
              <p>$10.00</p>
            </div>
          </div>
          
  
          <div class="cart-item-mad-bat">
            <div class="trash-mad-bat"></div>
            <p>1</p>
            <p>x</p>
            <div class="order-cont-mad-bat">
              <p>Potatoes</p>
              <h6>Hash Browns</h6>
            </div>
            <div class="price-cont">
              <p>$3.50</p>
            </div>
          </div>

          <div class="cart-item-mad-bat">
            <div class="trash-mad-bat"></div>
            <p>3</p>
            <p>x</p>
            <div class="order-cont-mad-bat">
              <p>Coffee</p>
              <h6>Cream, Iced, Whipped Cream</h6>
            </div>
            <div class="price-cont">
              <p>$7.50</p>
            </div>
          </div>

          <div class="cart-item-mad-bat">
            <div class="trash-mad-bat"></div>
            <p>1</p>
            <p>x</p>
            <div class="order-cont-mad-bat">
              <p>Water</p>
              <h6>With Lemon</h6>
            </div>
            <div class="price-cont">
              <p>$1.00</p>
            </div>
          </div>

          <div class="btn-mad-bat"><p>Checkout</p></div>

        </div>

        <div class="nav-mad-bat">
          <p>Waffles</p>
          <p>French Toast</p>
          <p>Pancakes</p>
          <p>Sides</p>
          <p>Drinks</p>
        </div>
        <hr class="nav-hr-mad-bat">
       
        
        <div class="logo-two-mad-bat">
          <div class="logo-cover-mad-bat">
            <div class="logo-mad-bat">
              <h5>The</h5>
              <h5>Mad</h5>
              <h5>Batter</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
`;

var portfolioCardDeckArr = [deadCatCard, madBatterCard, studioSilenceCard];

function changeCodeGuts(i) {
  deleteGuts();
  setTimeout(() => {
    const guts = document.createElement("div");
    guts.classList.add("stacked-guts");
    guts.innerHTML = portfolioCardDeckArr[i];
    codeCard.appendChild(guts);
  }, 1000);
  setTimeout(() => {
    const scripty = document.createElement("script");
    scripty.setAttribute("src", "projectCard.js");
    scripty.classList.add("project-card-script");
    document.body.appendChild(scripty);
  }, 1250);
}

function portfolioCardChange() {
  var i = 0;

  codeProjectUpBtn.addEventListener("click", () => {
    i--;
    if (i < 0) {
      i = 2;
    }
    changeCodeGuts(i);
  });

  codeProjectDownBtn.addEventListener("click", () => {
    i++;
    if (i > 2) {
      i = 0;
    }
    changeCodeGuts(i);
  });
}

portfolioCardChange();

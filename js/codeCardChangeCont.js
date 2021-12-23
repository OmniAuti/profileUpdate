const codeProjectUpBtn = document.querySelector(".code-project-less-btn");
const codeProjectDownBtn = document.querySelector(".code-project-add-btn");
var i = 0;

var deadCatCard = `
<a href="https://omniauti.github.io/deadCat/" target="_blank">
<div class="card">
  <div class="card-inner-dead-cat">
    <div class="header-dead-cat">
      <p>Home</p>
      <p>Info</p>
      <p>Download</p>
      <p>Merch</p>
    </div>
    <hr class="hr-dead-cat">
    <div class="card-title-dead-cat">
      <h1 class="title-dead-cat">Dead Cat</h1>
      <p class="p-dead-cat">- Here for the pounce</p>
    </div>
    <div class="logo-dead-cat">
    </div>
  </div>
</div>
</a>`;

var studioSilenceCard = `  
<a href="https://omniauti.github.io/studiosilence/" target="_blank">    
<div class="card">
  <div class="card-inner-studio-silence">
    <div class="title-studio-silence">
      <img class="studio-title-studio-silence" src="imgsProfileCards/stuidosilence/studioH1.png" alt="" />
      <img class="silence-title-studio-silence" src="imgsProfileCards/stuidosilence/SilenceH1.png" alt="" />
    </div>
    <div class="square-studio-silence"></div>
  </div>
</div>
</a>
`;

var madBatterCard = `
<a href="https://omniauti.github.io/madbatter/" target="_blank">

    <div class="card">
      <div class="card-inner-mad-bat">
        <div class="hero-mad-bat"></div>
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
    </a>
`;

var hoppyBarberCard = `
<a href="https://omniauti.github.io/barber/" target="_blank">

<div class="card">
  <div class="card-inner-hoppy">
    <hr class="border-no-3d-hoppy" />
    <div class="logo-hoppy"></div>
    <div class="nav-hoppy">
      <div class="name-holder-hoppy">
        <h2>The Hoppy Barber</h2>
      </div>
      <div class="nav-nav-hoppy">
        <p class="p-hoppy-one">Appointments</p>
        <p class="p-hoppy-two">Gallery</p>
        <p class="p-hoppy-three">About</p>
      </div>
    </div>
    <div class="gallery-hoppy">
      <div class="one-img-hoppy"></div>
      <div class="two-img-hoppy"></div>
    </div>
  </div>
</div>
</a>`;

var wheelersCard = `    
<a href="https://omniauti.github.io/TwoWheelers/" target="_blank">

<div class="card">
  <div class="card-inner-wheelers">
    <div class="hero-wheelers"></div>
    <div class="header-wheelers-top">
      <h2>
        Two
        <div class="logo-wheelers"></div>
        Wheeler's
      </h2>
      <div class="header-wheelers-bottom">
        <div class="border-cover-wheelers"></div>
        <p class="p-wheelers-one">Bikes</p>
        <p class="p-wheelers-two">Repairs</p>
        <p class="p-wheelers-three">Biking App</p>
      </div>
    </div>
    <div class="coa-wheelers"><h3>Visit Us</h3></div>
  </div>
</div>
</a>`;

var portfolioCardDeckArr = [
  deadCatCard,
  madBatterCard,
  studioSilenceCard,
  wheelersCard,
  hoppyBarberCard,
];

var deadCatInfo = `<p class="project-title">Dead Cat</p>
  <div class="text-used-code-cont">
    <div class="used-code-icon-cont">
      <div class="javascript-icon"></div>
      <div class="jquery-icon"></div>
      <div class="html-icon"></div>
      <div class="css-icon"></div>
      <div class="bootstrap-icon"></div>
    </div>
    <div class="project-information-details-cont">
      <p class="project-details">
        A Google Chrome extension that provides technical indicators of stocks in the Nasdaq and NYSE markets with information pulled from the <u><a href="https://site.financialmodelingprep.com/" target="_blank">Financial Modeling Prep</a></u> API. View the most volatile stocks of the day as well your own stock tickers.
      </p>
    </div>
  </div>
<a class="project-card-out-link" href="https://omniauti.github.io/deadCat/" target="_blank">Visit Site</a>`;
var madBatInfo = `<p class="project-title">Restaurant Template</p>
<div class="text-used-code-cont">
  <div class="used-code-icon-cont">
    <div class="javascript-icon"></div>
    <div class="html-icon"></div>
    <div class="css-icon"></div>
  </div>
  <div class="project-information-details-cont">
    <p class="project-details">
      Menu selection and accompanying modals for modifying a user's order. An interactive order cart that presents selected menu items, modifications, and totals per item. Tip and tax calculators accurately display price totals during checkout. 
    </p>
  </div>
</div>
<a class="project-card-out-link" href="https://omniauti.github.io/madbatter/" target="_blank">Visit Site</a>`;
var studioSilenceInfo = `<p class="project-title">Studio Silence</p>
<div class="text-used-code-cont">
  <div class="used-code-icon-cont">
    <div class="javascript-icon"></div>
    <div class="html-icon"></div>
    <div class="css-icon"></div>
  </div>
  <div class="project-information-details-cont">
    <p class="project-details">
      A local stained glass artist based in Chicago, Illinois. Custom gallery, contact, and horizontal scrolling effect while viewed on larger screens. Embedded links to the artist's Etsy store as well as a form to request custom work.
    </p>
  </div>
</div>
<a class="project-card-out-link" href="https://omniauti.github.io/studiosilence/" target="_blank">Visit Site</a>`;
var wheelersInfo = `<p class="project-title">Retail Store Template</p>
<div class="text-used-code-cont">
  <div class="used-code-icon-cont">
    <div class="javascript-icon"></div>
    <div class="html-icon"></div>
    <div class="css-icon"></div>
  </div>
  <div class="project-information-details-cont">
    <p class="project-details">
      Interactive photo carousel, open/closing soon/closed indications with store hours, and directions to the store from a user's current location. Current weather display pulled from the <u><a href="https://openweathermap.org/api" target="_blank">Open Weather</a></u> API and presented in a clean and understandable format.
    </p>
  </div>
</div>
<a class="project-card-out-link" href="https://omniauti.github.io/TwoWheelers/" target="_blank">Visit Site</a>`;
var hoppyBarberInfo = `<p class="project-title">The Hoppy Barber</p>
<div class="text-used-code-cont">
  <div class="used-code-icon-cont">
    <div class="javascript-icon"></div>
    <div class="jquery-icon"></div>
    <div class="html-icon"></div>
    <div class="css-icon"></div>
  </div>
  <div class="project-information-details-cont">
    <p class="project-details">
      A local barber based in Chicago, Illinois. Form for making appointments with the ability to select a user's service, appointment time/date based on the barber's schedule, and an accompanying drink selection menu. 
    </p>
  </div>
</div>
<a class="project-card-out-link" href="https://omniauti.github.io/barber/" target="_blank">Visit Site</a>`;

var infoArr = [
  deadCatInfo,
  madBatInfo,
  studioSilenceInfo,
  wheelersInfo,
  hoppyBarberInfo,
];

// FUNCTIONALITY TO CHANGE CARDS

function changeCodeGutsNext(i) {
  codeProjectDownBtn.classList.add("close-theater");
  codeProjectUpBtn.classList.add("close-theater");
  deleteGutsUp();
  setTimeout(() => {
    const guts = document.createElement("div");
    guts.classList.add("stacked-guts");
    guts.innerHTML = portfolioCardDeckArr[i];
    codeCard.appendChild(guts);
    guts.style.transform = "translateY(950px)";
  }, 425);
  setTimeout(() => {
    document.querySelector(".stacked-guts").style.transform = null;
  }, 450);
  setTimeout(() => {
    const scripty = document.createElement("script");
    scripty.setAttribute("src", "js/projectCard.js");
    scripty.classList.add("project-card-script");
    document.body.appendChild(scripty);
    codeProjectDownBtn.classList.remove("close-theater");
    codeProjectUpBtn.classList.remove("close-theater");
  }, 475);
}
function changeCodeGutsPrev(i) {
  codeProjectDownBtn.classList.add("close-theater");
  codeProjectUpBtn.classList.add("close-theater");
  deleteGutsDown();
  setTimeout(() => {
    const guts = document.createElement("div");
    guts.classList.add("stacked-guts");
    guts.innerHTML = portfolioCardDeckArr[i];
    codeCard.appendChild(guts);
    guts.style.transform = "translateY(-950px)";
  }, 425);
  setTimeout(() => {
    document.querySelector(".stacked-guts").style.transform = null;
  }, 450);
  setTimeout(() => {
    const scripty = document.createElement("script");
    scripty.setAttribute("src", "js/projectCard.js");
    scripty.classList.add("project-card-script");
    document.body.appendChild(scripty);
    codeProjectDownBtn.classList.remove("close-theater");
    codeProjectUpBtn.classList.remove("close-theater");
  }, 475);
}

function deleteGutsUp() {
  const scripty = document.querySelector(".project-card-script");
  scripty.remove();
  const derp = document.querySelector(".stacked-guts");
  derp.classList.add("move-project-down");
  const moveDown = document.querySelector(".move-project-down");
  moveDown.classList.remove(".stacked-guts");
  moveDown.style.transform = "translateY(-950px)";
  setTimeout(() => {
    moveDown.remove();
  }, 400);
}
function deleteGutsDown() {
  const scripty = document.querySelector(".project-card-script");
  scripty.remove();
  const derp = document.querySelector(".stacked-guts");
  derp.classList.add("move-project-down");
  const moveDown = document.querySelector(".move-project-down");
  moveDown.classList.remove(".stacked-guts");
  moveDown.style.transform = "translateY(950px)";
  setTimeout(() => {
    moveDown.remove();
  }, 400);
}
function deleteGutsClose() {
  const scripty = document.querySelector(".project-card-script");
  scripty.remove();
  const derp = document.querySelector(".stacked-guts");
  derp.classList.add("move-project-side");
  const moveSide = document.querySelector(".move-project-side");
  moveSide.classList.remove(".stacked-guts");
  moveSide.style.transform = "translateX(-50vh)";
  setTimeout(() => {
    moveSide.remove(); // REMOVE CARD
    projectInfoCont.innerHTML = ""; // CLEAR HTML OF PROJECT INFO
  }, 1000);
}

var i = 0;

function portfolioCardChange() {
var i = 0

  codeCloseBtn.addEventListener('click', () => {
    i = 0 // RESETS I FOR PROPER PROJECT ORDER DISPLAY WHEN OPEN
  })

  codeProjectUpBtn.addEventListener("click", () => {
    infoArr[i--];
    if (i < 0) {
      i = 4;
    }
    changeCodeGutsNext(i);
    projectInfoChange(i);
  });

  codeProjectDownBtn.addEventListener("click", () => {
    codeProjectUpBtn.removeAttribute("disabled");
    infoArr[i++];
    if (i > 4) {
      i = 0;
    }
    changeCodeGutsPrev(i);
    projectInfoChange(i);
    
  });
}

portfolioCardChange()

function createCodeGuts() {
  setTimeout(() => {
    const guts = document.createElement("div");
    guts.classList.add("stacked-guts");
    guts.innerHTML = portfolioCardDeckArr[0];
    codeCard.appendChild(guts);
    guts.style.transform = "translateY(950px)";
  }, 500);
  setTimeout(() => {
    document.querySelector(".stacked-guts").style.transform = null;
  }, 750);
  setTimeout(() => {
    const scripty = document.createElement("script");
    scripty.setAttribute("src", "js/projectCard.js");
    scripty.classList.add("project-card-script");
    document.body.appendChild(scripty);
  }, 1000);
}

const projectInfoCont = document.querySelector(".project-information-cont");
const projectDetails = document.querySelector(".project-details");

function projectDetailsFirstOpen() {
  projectInfoCont.innerHTML = infoArr[0];
  if (window.innerWidth > 850) {
    projectInfoCont.style.transform = "translate(0vw, -50%)";
    projectInfoCont.style.top = "50%)";
  }
  else 
  {
    projectInfoCont.style.transform = "translate(0vw, 25%)";
    projectInfoCont.style.top = "0%";
  }

}

function projectInfoChange(idx) {
  projectInfoCont.style.transform = null;
  setTimeout(() => {
   
    if (window.innerWidth > 850) {
      projectInfoCont.style.transform = "translate(0vw, -50%)";
      projectInfoCont.innerHTML = infoArr[idx];
    }
    else 
    {
      projectInfoCont.style.transform = "translate(0vw, 25%)";
      projectInfoCont.innerHTML = infoArr[idx];
    }
  }, 500);
}

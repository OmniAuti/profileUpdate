const codeProjectUpBtn = document.querySelector(".code-project-less-btn");
const codeProjectDownBtn = document.querySelector(".code-project-add-btn");

var deadCatCard = `
<div class="card">
  <div class="card-inner-dead-cat">
    <div class="header-dead-cat">
      <p>Home</p>
      <p>Info</p>
      <p>Download</p>
    </div>
    <hr class="hr-dead-cat">
    <div class="card-title-dead-cat">
      <h1 class="title-dead-cat">Dead Cat</h1>
      <p class="p-dead-cat">- Here for the pounce</p>
    </div>
    <div class="logo-dead-cat">
    </div>
  </div>
</div>`;

var studioSilenceCard = `      
<div class="card">
  <div class="card-inner-studio-silence">
    <div class="title-studio-silence">
      <img class="studio-title-studio-silence" src="imgsProfileCards/stuidosilence/studioH1.png" alt="" />
      <img class="silence-title-studio-silence" src="imgsProfileCards/stuidosilence/SilenceH1.png" alt="" />
    </div>
    <div class="square-studio-silence"></div>
  </div>
</div>`;

var madBatterCard = `
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
`;

var hoppyBarberCard = `
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
</div>`;

var wheelersCard = `    
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
</div>`

var portfolioCardDeckArr = [
  deadCatCard,
  madBatterCard,
  studioSilenceCard,
  hoppyBarberCard,
  wheelersCard,
];

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
    scripty.setAttribute("src", "js/projectCard.js");
    scripty.classList.add("project-card-script");
    document.body.appendChild(scripty);
  }, 1250);
}

function portfolioCardChange() {
  var i = 0;

  codeProjectUpBtn.addEventListener("click", () => {
    i--;
    if (i < 0) {
      i = 4;
    }
    changeCodeGuts(i);
  });

  codeProjectDownBtn.addEventListener("click", () => {
    i++;
    if (i > 4) {
      i = 0;
    }
    changeCodeGuts(i);
  });
}

portfolioCardChange();

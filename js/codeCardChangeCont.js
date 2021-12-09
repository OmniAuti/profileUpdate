const codeProjectUpBtn = document.querySelector(".code-project-less-btn");
const codeProjectDownBtn = document.querySelector(".code-project-add-btn");


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

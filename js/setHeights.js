

 window.onload = () => {
  //const fullVH = window.innerHeight;
  document.body.style.opacity = 0;
  /*
  const contactCard = document.querySelector(".stuck");
  contactCard.style.height = fullVH - 5 + "px";
  contactCard.style.width = fullVH - 5 + "px";
  contactCard.style.left = -(fullVH / 2) + "px";
  contactCard.style.top = fullVH / 2 + "px";

  designCard.style.height = fullVH - 5 + "px";
  designCard.style.width = fullVH - 5 + "px";
  designCard.style.left = -(fullVH / 2) - 50 + "px";
  designCard.style.top = fullVH / 2 + "px";

  codeCard.style.height = fullVH - 5 + "px";
  codeCard.style.width = fullVH - 5 + "px";
  codeCard.style.left = -(fullVH / 2) - 100 + "px";
  codeCard.style.top = fullVH / 2 + "px";

  const portCont = document.getElementById("portfolio");
  const heroCont = document.getElementById("hero");
  const conCont = document.getElementById("contact");

  portCont.style.height = fullVH + "px";
  heroCont.style.height = fullVH + "px";
  conCont.style.height = fullVH / 2 + "px";*/

  document.body.style.opacity = 1;
};


window.addEventListener("resize", () => {

  const portCont = document.getElementById("portfolio");
  const heroCont = document.getElementById("hero");
  const conCont = document.getElementById("contact");
  const fullVH = window.innerHeight;
  // HANDLES ACTIVE DESIGN CARD HEIGHT
  if (designCard.classList.contains("theater")) {

    window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" }); // FORCED SCROLL TO CONTACT SECTION
    return;
  }
  // HANDLES ACTIVE CODE CARD HEIGHT
  if (codeCard.classList.contains("theater")) {

    window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" }); // FORCED SCROLL TO CONTACT SECTION
    return;
  }
  // HANDLES ACTIVE CONTACT SECTION
  if (contactCard.classList.contains("active-contact")) {
    if (window.innerWidth > 750) {
      portfolioCont.style.transform = "translateY(-50vh)"; // LIFTS UP PROTFOLIO SECTION TO GIVE FEEL OF MOVEMENT
      window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" }); // FORCED SCROLL TO CONTACT SECTION 
    }
    else 
    {
      window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" }); // FORCED SCROLL TO CONTACT SECTION  
      portfolioCont.style.transform = null; // LIFTS UP PROTFOLIO SECTION TO GIVE FEEL OF MOVEMENT
    }

  }
});

function setHeights() {
  const fullVH = window.innerHeight;
  document.body.style.opacity = 0;
  const contactCard = document.querySelector(".stuck");
  contactCard.style.height = fullVH - 5 + "px";
  contactCard.style.width = fullVH - 5 + "px";

  designCard.style.height = fullVH - 5 + "px";
  designCard.style.width = fullVH - 5 + "px";

  codeCard.style.height = fullVH - 5 + "px";
  codeCard.style.width = fullVH - 5 + "px";


  const portCont = document.getElementById("portfolio");
  const heroCont = document.getElementById("hero");
  const conCont = document.getElementById("contact");

  portCont.style.height = fullVH + "px";
  heroCont.style.height = fullVH + "px";
  conCont.style.height = fullVH / 2 + "px";

  document.body.style.opacity = 1;
}
// SETS RESIZE OF CONTAINERS AND ACTIVE CARDS
function setHeightsMobile() {
  const fullVH = window.innerHeight;
  const girthAdd = fullVH / 4
  const fullVW = window.innerWidth;
  document.body.style.opacity = 0;
  const contactCard = document.querySelector(".stuck");
  contactCard.style.height = fullVH + girthAdd + "px";
  contactCard.style.width = fullVH +  girthAdd + "px";
  contactCard.style.left = -(fullVH / 2) + "px";
  contactCard.style.top = fullVH + 25 + "px";

  designCard.style.height = fullVH +  girthAdd + "px";
  designCard.style.width = fullVH +  girthAdd + "px";
  designCard.style.left = -(fullVH / 2) - 50 + "px";
  designCard.style.top = fullVH + 25 + "px";

  codeCard.style.height = fullVH +  girthAdd + "px";
  codeCard.style.width = fullVH +  girthAdd + "px";
  codeCard.style.left = -(fullVH / 2) - 100 + "px";
  codeCard.style.top = fullVH + 25 + "px";

  const portCont = document.getElementById("portfolio");
  const heroCont = document.getElementById("hero");
  const conCont = document.getElementById("contact");

  portCont.style.height = fullVH + "px";
  heroCont.style.height = fullVH + "px";
  conCont.style.height = fullVH / 2 + "px";

  document.body.style.opacity = 1;
}
const fullVH = window.innerHeight;

  window.onload = () => {
    document.body.style.opacity = 0;
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
    conCont.style.height = fullVH / 2 + "px";

    document.body.style.opacity = 1;
  };
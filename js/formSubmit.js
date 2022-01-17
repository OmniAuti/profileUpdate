var contactForm = document.getElementById("contact-form");

var nameInput = document.querySelector(".nameInput");
var emailInput = document.querySelector(".emailInput");
var descInput = document.querySelector(".description-contact-input");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var request = new XMLHttpRequest();

  const params = `name=${nameInput.value}\nemail=${emailInput.value}\ntextBox=${descInput.value}`;

  request.open("POST", "mail.php", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(params);

  console.log(nameInput.value);
  emailModal.innerHTML = "";
  emailModal.innerHTML = `
<div class="sending-css">
<div class="circle-outter">
  <div class="circle-inner">
    <div class="rect-loading"></div>
  </div>
</div>
</div>`;

  setTimeout(() => {
    emailModal.innerHTML = `
    <p class="fin-close-email-modal">X</p>
    <div class="fin-email-send">
    <p>Thanks for reaching out, ${nameInput.value}.</p>
    <p>I'll respond as soon as I can.</p>
    </div>
    `;
    const closeModal = document.createElement("script");
    closeModal.setAttribute("src", "js/finCloseModal.js");
    closeModal.classList.add("delete-after");
    document.body.append(closeModal);
    document.querySelector(".closeModal").remove();
    document.querySelector(".formSubmitSrc").remove();
  }, 1000);
});

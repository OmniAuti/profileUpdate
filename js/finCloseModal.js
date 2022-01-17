var closeFin = document.querySelector(".fin-close-email-modal");

closeFin.addEventListener("click", () => {
  emailModal.classList.remove("active-email-modal");

  setTimeout(() => {
    emailModal.innerHTML = "";
    emailModal.innerHTML = `
        <p class="close-email-modal">X</p>
        <h3>Contact</h3>
        <form id="contact-form" method="POST" action="mail.php">
          <div>
            <input
              tabindex="-1"
              id="name-contact-input"
              type="text"
              class="nameInput"
              placeholder="Name"
              name="name"
              value=""
            />
          </div>
          <div>
            <input
              tabindex="-1"
              id="email-contact-input"
              class="emailInput"
              type="email"
              placeholder="Email"
              name="email"
              value=""
            />
          </div>
          <div>
            <textarea
              tabindex="-1"
              id="description-contact-input"
              class="description-contact-input"
              name="description"
              cols="30"
              rows="5"
              placeholder="What can I do for you?"
            ></textarea>
          </div>
          <div>
            <button
              tabindex="-1"
              id="submit-contact-input"
              class="contact-submit-btn"
              name="submit"
            >
              Say Hi
            </button>
          </div>
        </form>`;
  }, 500);
  setTimeout(() => {
    document.querySelector(".delete-after").remove();
    const closeModalNew = document.createElement("script");
    closeModalNew.setAttribute("src", "js/closeModal.js");
    closeModalNew.classList.add("closeModal");
    document.body.append(closeModalNew);
    const formSub = document.createElement("script");
    formSub.setAttribute("src", "js/formSubmit.js");
    formSub.classList.add("formSubmitSrc");
    document.body.append(formSub);
  }, 750);
});

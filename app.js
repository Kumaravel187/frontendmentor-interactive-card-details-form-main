const formEl = document.getElementById("form");

window.addEventListener("DOMContentLoaded", () => {
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const allInpEl = document.querySelectorAll(".input");
    let allChecksPassed = true;

    const inputChecker = (inp, regex) => {
      if (!regex.test(inp.value) || !inp.value) {
        inp.nextElementSibling.classList.add("decline");
        inp.nextElementSibling.style.visibility = "visible";
        inp.nextElementSibling.textContent = "Not Valid!";
        allChecksPassed = false;
        inp.value = "";
      } else {
        inp.previousElementSibling.classList.add("accept");
        inp.nextElementSibling.style.visibility = "hidden";
      }
    };

    allInpEl.forEach((input) => {
      switch (input.id) {
        case "name":
          inputChecker(input, /^[a-zA-Z]+$/);
          break;
        case "number":
        case "cvc":
        case "mm":
        case "yy":
          inputChecker(input, /^\d+$/);
          break;
      }
    });

    if (allChecksPassed) {
      const sectionForm = document.querySelector("#section-form");

      sectionForm.style.display = "flex";
      sectionForm.innerHTML = `
      <img
          src="./images/icon-complete.svg"
          alt="completed"
          class="section-form__img"
        />
        <h3 class="section-form__header">thank you</h3>
        <p class="section-form__info">We've added your card details</p>
        <button class="section-form__continue">continue</button>
      `;
    }
  });
});

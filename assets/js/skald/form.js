const form = document.getElementById("form");
const inputs = form.querySelectorAll(".form__input");

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.value.length > 0) {
            input.classList.add("form__input--has-content");
        } else {
            input.classList.remove("form__input--has-content");
        }

        if (Array.from(inputs).some((input) => input.value.length >= 3)) {
            form.classList.remove("form--minimised");
        } else {
            form.classList.add("form--minimised");
        }
    });
});

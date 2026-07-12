const headerLinks = document.querySelectorAll(".header__link");

headerLinks.forEach((link) => {

    link.addEventListener("click", () => {

        const menu = document.querySelector("#headerMenu");

        const bootstrapMenu =
            bootstrap.Collapse.getInstance(menu);

        if (bootstrapMenu) {
            bootstrapMenu.hide();
        }

    });

});


const orderForm = document.querySelector(".order__form");


orderForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Спасибо! Ваша заявка отправлена.");

});
// Pure Eats - Basic Website Interactions

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const buttonText = button.textContent.trim();

            if (
                buttonText === "ORDER NOW" ||
                buttonText === "ORDER ON WHATSAPP"
            ) {
                alert("Thank you for choosing Pure Eats! WhatsApp ordering will be connected soon.");
            }

            if (buttonText === "SHOP NOW") {
                window.scrollTo({
                    top: document.body.scrollHeight / 2,
                    behavior: "smooth"
                });
            }

        });

    });

});

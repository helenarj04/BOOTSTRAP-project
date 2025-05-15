'use strict'

const ham = document.querySelector('.hamburger-menu svg');
const closeHam = document.querySelector('.hamburger-close svg');
const hamDiv = document.querySelector('.clicked-hamburger')

ham.addEventListener('click', () => {
    hamDiv.classList.toggle('active');

});
closeHam.addEventListener('click', () => {
    hamDiv.classList.toggle('active');
})
// ----------------------
document.addEventListener("DOMContentLoaded", function () {
    const text = "We serve quality service in indie games.";
    const typingElement = document.getElementById("typing");
    const expertiseSection = document.querySelector(".expertise");
    const items = document.querySelectorAll(".game-design-container");


    function startTyping() {
        let index = 0;
        function type() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        type();
    }


    function startFadeIn() {
        items.forEach((item) => {
            item.classList.add("animate");
        });
    }


    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {

                    startTyping();
                    startFadeIn();

                    observer.unobserve(expertiseSection);
                }
            });
        },
        {
            threshold: 0.2,
        }
    );


    observer.observe(expertiseSection);
});
// ---------------------


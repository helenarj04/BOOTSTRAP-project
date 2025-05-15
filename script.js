'use strict'

const ham = document.querySelector('.hamburger-menu svg');
const closeHam = document.querySelector('.hamburger-close svg');
const hamDiv = document.querySelector('.clicked-hamburger')

ham.addEventListener('click', () => {
    hamDiv.classList.toggle('active'); 

});
closeHam.addEventListener('click', ()=>{
    hamDiv.classList.toggle('active'); 
})
// ----------------------
document.addEventListener("DOMContentLoaded", function () {
    const text = "We serve quality service in indie games.";
    const typingElement = document.getElementById("typing");
    const expertiseSection = document.querySelector(".expertise");
    const items = document.querySelectorAll(".game-design-container");

    // Function to handle typing animation
    function startTyping() {
        let index = 0;
        function type() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100); // Adjust typing speed (100ms per character)
            }
        }
        type();
    }

    // Function to trigger fade-in animations
    function startFadeIn() {
        items.forEach((item) => {
            item.classList.add("animate");
        });
    }

    // IntersectionObserver to detect when .expertise is in view
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Start animations when section is in view
                    startTyping();
                    startFadeIn();
                    // Stop observing after animations start to prevent re-triggering
                    observer.unobserve(expertiseSection);
                }
            });
        },
        {
            threshold: 0.2, // Trigger when 20% of the section is visible
        }
    );

    // Observe the expertise section
    observer.observe(expertiseSection);
});
// ---------------------

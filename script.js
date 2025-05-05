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

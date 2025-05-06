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
// expertise-------------------------
const typing = document.querySelector('#typing')

    const text = 'We serve quality service in indie games.'
    let i = 0
    const speed = 50
    function typeWriter (){
        if (i<text.length){
            typing.innerHTML += text.charAt(i);
            i++;
            setTimeout (typeWriter, speed);
        }
    }
window.onload = typeWriter;

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
    const speed = 40
    function typeWriter (){
        if (i<text.length){
            typing.innerHTML += text.charAt(i);
            i++;
            setTimeout (typeWriter, speed);
        }
    }
window.onload = typeWriter;
// ----------------------
gsap.registerPlugin(SplitText);

const segmenter = new Intl.Segmenter("zh", { granularity: "word" });

document.fonts.ready.then(() => {
  gsap.set(".split", { opacity: 1 });

  const split = SplitText.create(".split", {
    type: "words",
    wordsClass: "word",
    prepareText: (text, el) => {
      return [...segmenter.segment(text)].map(s => s.segment).join(String.fromCharCode(8204))
    },
    wordDelimiter: { delimiter: /\u200c/, replaceWith: " " },
    autoSplit: true,
    onSplit: (self) => {
      return gsap.from(self.words, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: "back"
      });
    }
  });
});

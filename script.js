const buttons= document.querySelectorAll('.button'); // to select all the buttons
const body= document.querySelector('body');// to select the complete body

buttons.forEach(function(button){ // applying loop on every button
    button.addEventListener('click', function(e){ // event click meeans it will work on 'click' and function(e) used to give instruction what to do on every click
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id // e.target means from where e has come like from grey, blue etc.
        }
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id
        }
    });
});
let timer = document.querySelector('#timer');
let clean = document.querySelector('#Clean');
let update = document.querySelector('#update');
let start = document.querySelector('#start'); 
let cardEdit = document.querySelector('#cardEdit'); 
let cardEdit2 = document.querySelector('#cardEdit2'); 
let cardEdit3 = document.querySelector('#cardEdit3');;; 
let item1 = document.querySelector('#item1'); 
let item2 = document.querySelector('#item2'); 
let item3 = document.querySelector('#item3');
let editCARD = document.querySelector('.editCARD');
let itemCard = document.querySelector('.itemCard');


 function starT(){
    let cardIncrement = 0;
    window.myFunction = () => {
        cardIncrement++;
        cardEdit.innerHTML = `${cardIncrement}`;
    }
    let cardIncremen = 0;
    window.myFunction2 = () => {
        cardIncrement--;
        cardEdit.innerHTML = `${cardIncrement}`;
    }
    
    let cardIncrement0 = 0;
    window.myFunctio3 = () => {
        cardIncrement0++;
        cardEdit2.innerHTML = `${cardIncrement0}`;
    }
    let cardIncrement41 = 0;
    window.myFunction4 = () => {
        cardIncrement0--;
        cardEdit2.innerHTML = `${cardIncrement0}`;
    }
    
    let cardIncrement3 = 0;
    window.myFunctio5 = () => {
        cardIncrement3++;
        cardEdit3.innerHTML = `${cardIncrement3}`;
    }
    let cardIncremen19 = 0;
    window.myFunction6 = () => {
        cardIncrement3--;
        cardEdit3.innerHTML = `${cardIncrement3}`;
    }
    
    console.log(cardIncrement);
    
    
    start.addEventListener('click', () => {
       item1.innerHTML = ` ${ cardIncrement} :`
    })
    start.addEventListener('click', () => {
        item2.innerHTML = ` ${ cardIncrement0} :`
     })
     start.addEventListener('click', () => {
        item3.innerHTML = ` ${ cardIncrement3}`
     })



     update.addEventListener('click', () => {
        editCARD.innerHTML += `
        <li class="itemCard"> ${cardIncremen} 
        : ${cardIncrement0} : ${cardIncrement3} s</li>
        `
     })

 }

 starT()

 console.log(update)






import {cases} from "./data.js";
//ELEMENTS
const nextBtn = document.querySelector('.fas.fa-chevron-right');
const prevBtn = document.querySelector('.fas.fa-chevron-left');
const sliderContainer = document.querySelector('.slider-container');
let counter = JSON.parse(localStorage.getItem('overlayIndex'));
const caseNameElement = document.querySelector('.case-name');


//EVENT LISTENERS
window.addEventListener('DOMContentLoaded', () =>{
    setupImage();
})

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);



//FUNCTIONS
function setupImage(){
    caseNameElement.textContent = cases[counter - 1].title;
    sliderContainer.innerHTML = `<img src="case${counter}.png" alt="" class="slider-img">`;
   
}

function nextImage(){
    counter++;

    if(counter > cases.length){
        counter = 1;
    }
    localStorage.setItem('overlayIndex', counter);
    setupImage();
   
}


function prevImage(){
    counter--;

    if(counter < 1){
        counter = cases.length;
    }
    setupImage();
    localStorage.setItem('overlayIndex', counter);
}
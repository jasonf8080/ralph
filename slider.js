import {cases} from "./data.js";
//ELEMENTS
const nextBtn = document.querySelector('.fas.fa-chevron-right');
const prevBtn = document.querySelector('.fas.fa-chevron-left');
const sliderContainer = document.querySelector('.slider-container');
let counter = JSON.parse(localStorage.getItem('overlayIndex'));
const caseNameElement = document.querySelector('.case-name');
const imgElement = document.querySelector('.slider-container img');



//EVENT LISTENERS
window.addEventListener('DOMContentLoaded', () =>{
    setupUI();
})

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);



//FUNCTIONS

 function setupUI(){
    imgElement.src = `case${counter}.png`;
    caseNameElement.textContent = cases[counter - 1].title;
} 
   
   




function nextImage(){
    counter++;

    if(counter > cases.length){
        counter = 1;
    }

    setupUI();
    localStorage.setItem('overlayIndex', counter);
}


function prevImage(){
    counter--;

    if(counter < 1){
        counter = cases.length;
    }
    setupUI();
    localStorage.setItem('overlayIndex', counter);
}
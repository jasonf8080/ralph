import {cases} from "./data.js";
//ELEMENTS
const nextBtn = document.querySelector('.fas.fa-chevron-right');
const prevBtn = document.querySelector('.fas.fa-chevron-left');
const sliderContainer = document.querySelector('.slider-container');
let counter = JSON.parse(localStorage.getItem('overlayIndex'));
const caseNameElement = document.querySelector('.case-name');


//EVENT LISTENERS
window.addEventListener('DOMContentLoaded', () =>{
    setupUI();
})

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);



//FUNCTIONS

async function setupUI(){
    try{
        sliderContainer.innerHTML = `<div class="loader">
        <i class="fa-solid fa-spinner"></i>
    </div>`;
        await setupImage();
        await setupText();

    } catch(error) {
        console.log(error)
    }
} 
   
   


function setupImage(){
    sliderContainer.innerHTML = `<img src="case${counter}.png" alt="" class="slider-img">`;
   
}

function setupText(){
    caseNameElement.textContent = cases[counter - 1].title
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
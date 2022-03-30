import {cases} from "./data.js";

const nextBtn = document.querySelector('.fas.fa-chevron-right');
const prevBtn = document.querySelector('.fas.fa-chevron-left');
const sliderContainer = document.querySelector('.slider-container');
let counter = JSON.parse(localStorage.getItem('overlayIndex'));

window.addEventListener('DOMContentLoaded', () =>{
    setupImage();
})

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

function setupImage(){
    sliderContainer.innerHTML = `<img src="case${counter}.png" alt="" class="slider-img">`;
}

function nextImage(){
    counter++;

    if(counter > cases.length){
        counter = 1;
    }
    setupImage();
    localStorage.setItem('overlayIndex', counter);
}


function prevImage(){
    counter--;
    if(counter < 1){
        counter = cases.length;
    }
    setupImage();
    localStorage.setItem('overlayIndex', counter);
}
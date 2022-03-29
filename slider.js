import {cases} from "./data.js";

const nextBtn = document.querySelector('.fas.fa-chevron-right');
const prevBtn = document.querySelector('.fas.fa-chevron-left');
const sliderImg = document.querySelector('.slider-img');
let counter = JSON.parse(localStorage.getItem('overlayIndex'));

window.addEventListener('DOMContentLoaded', () =>{
    setupImage();
})

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

function setupImage(){
    sliderImg.src = `case${counter}.png`;
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
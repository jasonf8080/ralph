import {cases} from "./data.js";
import {softwares} from "./data.js";

//ELEMENTS
const caseDisplaySection = document.querySelector('.case-display-section');
const sofwareDisplaySection = document.querySelector('.programs-section-grid');
const menuBtn = document.querySelector('.toggle-button');
const menu = document.querySelector('.links');
const bars = [...document.querySelectorAll('.bar')];

//const bars = document.querySelectorAll('.bar');

//EVENT LISTENERS
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');

    bars.forEach((bar) => {
        bar.classList.toggle('change');
    })
})


//FUNCTIONS
function updateCases(){

    let caseLinks = cases.map(function(link){
        return `<a href="slider.html" class="case-display-item">
        <img src="${link.img}">
        <div class="overlay">
            <h1>${link.title}</h1>
            <p>${link.desc}</p>
        </div>
    </a>`;
    }).join('');
    
    caseDisplaySection.innerHTML = caseLinks;

}

updateCases();

function updateSoftware(){
    let newSoftwares = softwares.map(img => {
        return  `<div class="program">
        <img src="${img.title}" alt="">
        <p>${img.title.replace('.png', '')}</p>
    </div>`;
    }).join('');
  
    sofwareDisplaySection.innerHTML = newSoftwares;
}

updateSoftware();

const overlays = document.querySelectorAll('.overlay');

overlays.forEach((overlay, index) => {
    overlay.addEventListener('click', function(e){
        let overlayIndex = index + 1; 
        localStorage.setItem('overlayIndex', JSON.stringify(overlayIndex));
    })
})
 


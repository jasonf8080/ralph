import {cases} from "./data.js";
import {softwares} from "./data.js";

const caseDisplaySection = document.querySelector('.case-display-section');
const sofwareDisplaySection = document.querySelector('.programs-section-grid');

const menuIcon = document.querySelector('.menu');
const bars = document.querySelectorAll('.bar');
console.log(bars);

menuIcon.addEventListener('click', () => {
    bars[1].style.transition = `all 0.1s`;
    menuIcon.classList.toggle('active');
    if(menuIcon.classList.contains('active')){
        bars[0].style.transform = 'rotate(45deg) translateY(11px)';
        bars[1].style.visibility = 'hidden';
        bars[2].style.transform = 'rotate(-45deg) translateY(-11px)';
    } else {
        bars[0].style.transform = 'rotate(0deg)';
        bars[1].style.visibility = 'visible';
        bars[2].style.transform = 'rotate(0deg)';
    }
})

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
    overlay.addEventListener('click', function(){
        let overlayIndex = index + 1; 
        localStorage.setItem('overlayIndex', JSON.stringify(overlayIndex));
    })
})
 


const menuBtn = document.querySelector('.toggle-button');
const menu = document.querySelector('.links');
const bars = [...document.querySelectorAll('.bar')];

//EVENT LISTENERS
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');

    bars.forEach((bar) => {
        bar.classList.toggle('change');
    })
})
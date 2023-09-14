
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    const navListItems = document.querySelectorAll('.nav-list ul li'); 
    const logo = document.querySelector('.logo-svg'); 
    
    if (window.scrollY > 0) {
        nav.classList.add('nav-scrolled');
    
        navListItems.forEach(function(item) {
            item.style.color = 'black';
        });

        logo.setAttribute('fill', 'black');
    } else {
        nav.classList.remove('nav-scrolled');
        navListItems.forEach(function(item) {
            item.style.color = 'white';
        });
        logo.setAttribute('fill', 'white');
    }
});

const container = document.querySelector('.container');
const slidingSections = document.querySelectorAll('.sliding-img');
let currentIndex = 0;

function slideNext() {
    currentIndex = (currentIndex + 1) % slidingSections.length;
    updateSlide();
}

function updateSlide() {
    const translateXValue = -currentIndex * 100 + '%';
    container.style.transform = `translateX(${translateXValue})`;
}

setInterval(slideNext, 3000);


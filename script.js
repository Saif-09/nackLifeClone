
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

const boxWrapper = document.querySelector('.box-wrapper');
const box = document.querySelectorAll('.box-wrapper > *');
const boxLength = box.length
const perView = 3;
let totalScroll = 0;
const delay = 3000

boxWrapper.style.setProperty('--per-view', perView)
for (let i = 0; i < perView; i++) {
  boxWrapper.insertAdjacentHTML('beforeend', box[i].outerHTML)
}

let autoScroll = setInterval(scrolling, delay)

function scrolling(){
  totalScroll++
  if(totalScroll=== boxLength+1){
    clearInterval(autoScroll)
    totalScroll=1
    boxWrapper.style.transition = '0s'
    boxWrapper.style.left = '0'
    autoScroll = setInterval(scrolling, delay)
  }
  const widthEl = document.querySelector('.box-wrapper > :first-child').offsetWidth + 24
  boxWrapper.style.left = `-${totalScroll * widthEl}px`
  boxWrapper.style.transition = '.3s'
}

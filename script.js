// JavaScript to handle the navbar background color change on scroll
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

let navigationActiveLinks=document.getElementById('navigation-js');
let burgerActive=document.getElementById('hamburger-menu');

burgerActive=addEventListener('click', function() {
    navigationActiveLinks.classList.menu__toggle('nav-active');

})
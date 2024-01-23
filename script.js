// use strict mode

const menu_btn = document.querySelector('.menu-btn');
const menu_bar = document.querySelector('.menu-btn i');
const sideNav = document.querySelector('.side-nav');

menu_btn.addEventListener('click', toggle);

function toggle() {
    sideNav.classList.toggle('show');
    const show = sideNav.classList.contains('show');

    menu_bar.classList = show ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

function scrollToMain() {
    const mainElement = document.getElementById('main');

    if (mainElement) {
        mainElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
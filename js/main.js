const burgerMenu = document.querySelector('.menu-burger');
const headerMenu = document.querySelector('.header__menu');
const arrowBack = document.querySelector('.arrow-back');
const bodyLock = document.querySelector('body');
const headerBrand = document.querySelector('.header__brand')

// Burger menu logic
const elementsList = [burgerMenu, headerMenu, arrowBack, bodyLock, headerBrand];
function burgerClick() {
    elementsList.forEach((element) => {
        element.classList.add('active')
    })
}

function arrowClick() {
    elementsList.forEach((element) => {
        element.classList.remove('active')
    })
}

burgerMenu.addEventListener("click", burgerClick);
arrowBack.addEventListener("click", arrowClick);

// Smart header
const header = document.querySelector('.header');

let lastScroll = 0;
const defaultOffset = 200;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header_hide');

window.addEventListener("scroll", () => {
    if (scrollPosition() > lastScroll && !containHide()) {
        //scroll down
        header.classList.add('header_hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
        //scroll up
        header.classList.remove('header_hide');
    }

    lastScroll = scrollPosition();
    if (lastScroll > 1) {
        header.classList.add('like_a_glass');
    } else {
        header.classList.remove('like_a_glass');
    }
});
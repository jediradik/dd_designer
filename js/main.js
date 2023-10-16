const burgerMenu = document.querySelector('.menu-burger');
const headerMenu = document.querySelector('.header__menu');
const arrowBack = document.querySelector('.arrow-back');
const bodyLock = document.querySelector('body');
const headerBrand = document.querySelector('.header__brand')

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
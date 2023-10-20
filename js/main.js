const burgerMenu = document.querySelector('.menu-burger');
const headerMenu = document.querySelector('.header__menu');
const arrowBack = document.querySelector('.arrow-back');
const bodyLock = document.querySelector('body');
const headerBrand = document.querySelector('.header__brand')

//Burger menu logic
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

//Smart header
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

//Tabs
const tabFirst = document.querySelector('.tab-1');
const tabSecond = document.querySelector('.tab-2');
const tabThird = document.querySelector('.tab-3');
const contentFirst = document.querySelector('.tabs__content_1');
const contentSecond = document.querySelector('.tabs__content_2');
const contentThird = document.querySelector('.tabs__content_3');

const tabsList = [tabFirst, tabSecond, tabThird];
const contentList = [contentFirst, contentSecond, contentThird];

function tabOnClick(e) {
    let currentTarget = e.target;
    console.dir(currentTarget);

    tabsList.forEach((tab) => {
        tab.classList.remove('active');
    });

    contentList.forEach((content) => {
        content.classList.remove('active');
    });

    if (currentTarget === tabFirst) {
        tabFirst.classList.add('active');
        contentFirst.classList.add('active');
    } else if (currentTarget === tabSecond) {
        tabSecond.classList.add('active');
        contentSecond.classList.add('active');
    } else {
        tabThird.classList.add('active');
        contentThird.classList.add('active');
    }
}

tabsList.forEach((tab) => {
    tab.addEventListener("click", tabOnClick);
})

//Sliders
//Graphic portfolio Slider
const graphicSlider = new Swiper('.graphic-slider', {
    navigation: {
        nextEl: '.graphic-slider-btn.swiper-button-next',
        prevEl: '.graphic-slider-btn.swiper-button-prev',
    },
    pagination: {
        el: '.graphic-slider-pagination.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    autoHeight: false,
    slidesPerView: 2,
    grid: {
        rows: 2,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            grid: {
                rows: 3,
            },
        },
        500: {
            slidesPerView: 2,
            grid: {
                rows: 3,
            },
        },
        768: {
            slidesPerView: 1.2,
            grid: {
                rows: 2,
            },
        },
        1024: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },
    },
});

//Web portfolio Slider
const webSlider = new Swiper('.web-slider', {
    navigation: {
        nextEl: '.web-slider-btn.swiper-button-next',
        prevEl: '.web-slider-btn.swiper-button-prev',
    },
    pagination: {
        el: '.web-slider-pagination.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    autoHeight: false,
    slidesPerView: 2,
    grid: {
        rows: 2,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            grid: {
                rows: 3,
            },
        },
        500: {
            slidesPerView: 2,
            grid: {
                rows: 3,
            },
        },
        768: {
            slidesPerView: 1.2,
            grid: {
                rows: 2,
            },
        },
        1024: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },
    },
});
const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav__link');
const navOverlay = document.querySelector('.main-nav__overlay');

const closeNav = function () {
    header.classList.remove('header--nav-open');
    nav.classList.remove('main-nav--open');
    burger.setAttribute('aria-expanded', 'false');
}

const openNav = function () {
    header.classList.add('header--nav-open');
    nav.classList.add('main-nav--open');
    burger.setAttribute('aria-expanded', 'true');
}

const handleNav = function () {
    if (header.classList.contains('header--nav-open')) {
        closeNav();
    } else {
        openNav();
    }
}

burger.addEventListener('click', () => {
    handleNav();
});

navOverlay.addEventListener('click', () => {
    if (header.classList.contains('header--nav-open')) {
        closeNav();
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (header.classList.contains('header--nav-open')) {
            closeNav();
        }
    });
});

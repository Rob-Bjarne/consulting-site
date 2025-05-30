const setScrolledState = () => {
    const top = 32;

    if (window.scrollY >= top) {
        document.body.setAttribute('data-scrolled', 'true');
    } else {
        document.body.setAttribute('data-scrolled', 'false');
    }
}

let prevScrollPos = 0;

const setScrollDirection = () => {
    let currentScrollPos = window.scrollY;
    document.body?.setAttribute(
        'data-scroll-direction',
        prevScrollPos > currentScrollPos && currentScrollPos > 32 ? 'up' : 'down'
    );
    prevScrollPos = currentScrollPos;
}

document.addEventListener('scroll', setScrollDirection);
document.addEventListener('scroll', setScrolledState);
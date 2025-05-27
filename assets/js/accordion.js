document.querySelectorAll('.accordion__item').forEach(item => {
    item.addEventListener('click', () => {
        const activeItem = item.classList.contains('accordion__item--active');

        document.querySelectorAll('.accordion__item').forEach(i => {
            i.classList.remove('accordion__item--active');
        });

        if (!activeItem) {
            item.classList.add('accordion__item--active');
        }
    });
});

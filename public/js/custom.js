document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('wheel', (e) => {
            const isSection1 = section.classList.contains('section1');
            const isSection2 = section.classList.contains('section2');
            const deltaY = e.deltaY;
            const scrollable = deltaY > 0 && !section.nextElementSibling || deltaY < 0 && !section.previousElementSibling;
            if (isSection1) {
                $('.fade-in-R').addClass('show');
                $('.fade-in-L').addClass('show');
            } else if (isSection2) {
                $('.fade-in-Down').addClass('show');
            }
            if (scrollable) e.preventDefault();
        });
    });
});
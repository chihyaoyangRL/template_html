document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('wheel', (e) => {
            const deltaY = e.deltaY;
            const scrollable = deltaY > 0 && !section.nextElementSibling || deltaY < 0 && !section.previousElementSibling;
            if (scrollable) {
                e.preventDefault();
            }
        });
    });
});
const isMobile = window.innerWidth <= 768;
if (isMobile == true) {
    $('.fade-in-Down').addClass('show');
    $('.fade-in-R').addClass('show');
    $('.fade-in-L').addClass('show');
} else {
    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.addEventListener('wheel', (e) => {
                const deltaY = e.deltaY;
                const scrollable = deltaY > 0 && !section.nextElementSibling || deltaY < 0 && !section.previousElementSibling;
                if (deltaY > 0 && !scrollable) {
                    if (section.nextElementSibling.classList.contains('section2')) {
                        $('.fade-in-R').addClass('show');
                        $('.fade-in-L').addClass('show');
                    }
                    if (section.nextElementSibling.classList.contains('section3')) $('.fade-in-Down').addClass('show');
                }
                if (scrollable == true && deltaY > 0) {
                    $('.fade-in-Down').addClass('show');
                    $('.fade-in-R').addClass('show');
                    $('.fade-in-L').addClass('show');
                }
                if (scrollable) e.preventDefault();
            });
        });
    });
}
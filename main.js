document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in on scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    function handleScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on page load
});

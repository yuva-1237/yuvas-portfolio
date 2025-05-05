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

// Smooth scroll to the top
const scrollTopButton = document.querySelector('.scroll-top');

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Theme toggle (dark to light mode)
const darkTheme = document.querySelector('.dark-theme');

const toggleTheme = () => {
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light'); // Store preference in localStorage
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark'); // Store preference in localStorage
  }
};

// Check stored theme preference on page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList.add(currentTheme);
}

// Example of a theme toggle button (add this in your HTML if you need a manual toggle)
const themeToggleButton = document.createElement('button');
themeToggleButton.innerHTML = "Toggle Theme";
themeToggleButton.style.position = 'fixed';
themeToggleButton.style.top = '10px';
themeToggleButton.style.right = '10px';
themeToggleButton.style.padding = '10px 15px';
themeToggleButton.style.backgroundColor = '#ffcc00';
themeToggleButton.style.border = 'none';
themeToggleButton.style.cursor = 'pointer';

document.body.appendChild(themeToggleButton);

// Event listener to toggle the theme
themeToggleButton.addEventListener('click', toggleTheme);
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 50, // Adjust for header height if needed
                  behavior: 'smooth'
              });
          }
      });
  });
});
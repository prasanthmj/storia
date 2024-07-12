document.addEventListener('DOMContentLoaded', (event) => {
    const mobileMenuButton = document.querySelector('header button');
    const mobileMenu = document.getElementById('mobile-menu');
  
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  });
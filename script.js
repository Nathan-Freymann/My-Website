document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const currentYear = document.getElementById('current-year');

    // 1. Mobile Navigation Toggle
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Toggle the 'active' class on the navigation links
            navLinks.classList.toggle('active');
            
            // Optionally change the icon from bars to a close icon
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Automatically update the current year in the footer
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});

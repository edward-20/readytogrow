// FAQ Accordion Functionality
document.querySelectorAll('.faq-container .faq-question').forEach(function(button) {
    button.addEventListener('click', function() {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});


// Mobile Menu Toggle Functionality
const menuBtn = document.querySelector('#menu-btn'); // Menu icon
const navbar = document.querySelector('.navbar'); // Navbar links container

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle 'active' class to show/hide navbar
});

// Optional: Close menu when clicking a navbar link (on mobile)
document.querySelectorAll('.navbar a').forEahch(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active'); // Close menu after clicking a link
        }
    });
});

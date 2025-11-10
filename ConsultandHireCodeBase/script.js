document.addEventListener('DOMContentLoaded', function() {
  // Form submission handling
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show success message
      alert('Thank you for your submission! We will contact you shortly.');
      form.reset();
    });
  });

  // Mobile menu toggle (for navbar)
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // Add active class to current page link in navbar
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('custom-navbar a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
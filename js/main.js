// AnubisX Framework - Main JavaScript
(function() {
  // Smooth scroll for anchor links
  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^=\"#\"]');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
    // Copy citation buttons
    var copyButtons = document.querySelectorAll('button[data-copy]');
    copyButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        navigator.clipboard.writeText(this.getAttribute('data-copy'));
      });
    });
  });
})();

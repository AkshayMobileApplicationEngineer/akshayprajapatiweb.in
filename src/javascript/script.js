// Add event listener to button
document.querySelector('.hero button').addEventListener('click', function() {
      // Scroll to projects section
      document.querySelector('.projects-section').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Add event listener to nav links
  document.querySelectorAll('nav a').forEach(function(link) {
      link.addEventListener('click', function(event) {
          // Prevent default link behavior
          event.preventDefault();
          // Scroll to section
          document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
  });
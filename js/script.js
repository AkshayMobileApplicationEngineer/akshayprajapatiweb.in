// Toggle mobile menu visibility
document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});



// Form validation for newsletter subscription
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        event.preventDefault(); // Prevent form submission
        alert('Please enter a valid email address.');
    } else {
        alert('Subscribed successfully!');
    }
});


// Smooth scrolling to page sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





// Contact form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Your message has been sent!');
    } else {
        alert('Please fill out all fields.');
    }
});




// Simple form validation for the contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    if (name && email && message) {
        alert('Message sent successfully!');
    } else {
        event.preventDefault();
        alert('Please fill out all the fields.');
    }
});

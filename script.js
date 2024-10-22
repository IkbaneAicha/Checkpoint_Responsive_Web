// Smooth Scrolling
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');
    
    if(name && email && message) {
        formMessage.textContent = "Thank you! We'll get back to you soon.";
        formMessage.style.color = 'green';
        contactForm.reset();
    } else {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = 'red';
    }
});

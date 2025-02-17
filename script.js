

document.getElementById('contact-btn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all the fields.');
    } 
});


document.querySelector('.header-image img').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});

document.querySelector('.header-image img').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});


window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(function(element) {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

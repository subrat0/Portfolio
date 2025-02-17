<<<<<<< HEAD

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
    } else {
        alert('Thank you for your message! I will get back to you soon.');
       
        document.getElementById('contact-form').reset();
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
=======

document.getElementById('contact-btn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all the fields.');
    } else {
        alert('Thank you for your message! I will get back to you soon.');
       
        document.getElementById('contact-form').reset();
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
>>>>>>> 810e7c3c624b9b74c030f94cddc3a1956d5b80a7

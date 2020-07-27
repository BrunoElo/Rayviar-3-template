// Slider initialiser for testimonials
$(document).ready(function () {
    $('.testimonial-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        centerMode: true,
        variableWidth: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});


// Simple light-box
var lightbox = new SimpleLightbox('.space a', { /* options */ });

// Scroll reveal
$(document).ready(function () {
    window.sr = new ScrollReveal();
    sr.reveal('#brandname', {
        duration: 1000,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('#aboutusimg, .servicecard:nth-of-type(3),.card:nth-of-type(3), .mailing-list h3', {
        duration: 1000,
        origin: 'right',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal(' #aboutus h2, #aboutus h3, #aboutus p', {
        duration: 1000,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal(' #services, .servicecard:nth-of-type(1), .card:nth-of-type(1), .end h1', {
        duration: 1000,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.servicecard:nth-of-type(2)', {
        duration: 1000,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.gallery-animate, .ad h2', {
        duration: 1000,
        //origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.card:nth-of-type(2)', {
        duration: 1000,
        origin: 'top',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.form-container h3, .mailing-list-wrapper', {
        duration: 1000,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.form-container__textinput', {
        duration: 1500,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.form-container__emailinput', {
        duration: 2000,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.form-container textarea', {
        duration: 2500,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.form-container__img', {
        duration: 2000,
        origin: 'right',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });









});
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
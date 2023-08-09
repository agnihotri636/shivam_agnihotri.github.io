// Smooth scrolling effect
$('nav a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800 // Animation duration in milliseconds
        );
    }
});

// Simple animation on scroll
$(window).scroll(function() {
    $('.animate-on-scroll').each(function() {
        const position = $(this).offset().top;
        const scroll = $(window).scrollTop();

        if (position < scroll + 600) {
            $(this).addClass('animated');
        }
    });
});

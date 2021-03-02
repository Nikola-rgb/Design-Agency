$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});




       // ikonica za nav
/*      
    $('.navbar-toggler').html("<i class='fas fa-bars fa-2x' style='color:var(--primary)'></i>");

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if(scroll >= 100) {
            $('.sticky').addClass('stickyAdd');
        } else {
            $('.sticky').removeClass('stickyAdd');
        }
    })*/
    
      // Animacija hover
      
VanillaTilt.init(document.querySelector(".box"), {
		max: 25,
		speed: 400,
        glare: true,
	});




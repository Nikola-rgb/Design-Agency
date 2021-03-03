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
    
    // Animacija hover
      
VanillaTilt.init(document.querySelector(".box"), {
		max: 25,
		speed: 400,
        glare: true,
	});

// Hamburger-menu

const menuIcon = document.querySelector(".hamburger-menu");

const navbar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", () =>{
    navbar.classList.toggle("change");
});


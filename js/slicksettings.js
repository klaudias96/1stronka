$('.team-carousel').slick({
	arrows: false,
	autoplay: true,
	mobileFirst: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
        {
            breakpoint: 576,
            settings: { 
                slidesToShow: 2
            }
        },
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 992,
			settings: { 
                slidesToShow: 3
            }
		}

	],
})



// w settings w slicku arrow:true, wiec zeby uruchomic, dajemy odwrotnie, czyli false.

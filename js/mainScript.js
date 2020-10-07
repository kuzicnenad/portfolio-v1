
// jquery to change active class on click

		$(document).ready(function(){
			var scrollLink = $('.scroll');

			// Smooth scrolling
			scrollLink.click(function(e){
				e.preventDefault();	// preventing action to jump on click
				$('body,html').animate({
					scrollTop: $(this.hash).offset().top
				}, 1000 );
			});

			// Active link switching
			$(window).scroll(function(){
				var scrollbarLocation = $(this).scrollTop();

				scrollLink.each(function(){
					var sectionOffset = $(this.hash).offset().top -350;

					if(sectionOffset <= scrollbarLocation){
						$(this).parent().addClass('active');
						$(this).parent().siblings().removeClass('active');
					}
				})
			})
		});


// Blur image on home page when mouseover button

		$(function(){
			$('.btn, .arrow-down').hover(function(){
				$('.bg-image').addClass('blur');
			}, function(){
				$('.bg-image').removeClass('blur');
			});
		});



// Menu toggle-button & scrolling effect

		// toggle button
		$(document).ready(function(){
			$('.menu-icon').on('click', function(){
				$('nav ul').toggleClass('showing');
			});
		});


		// scrolling effect		
		$(window).on('scroll', function(){
			if($(window).scrollTop()){
				$('nav').addClass('black');
			}
			else{
				$('nav').removeClass('black');
			}
		});


// Blinking Arrows to scroll down and up 

		$(function() {
    		$(window).scroll(function() {
        		console.log('scrolling ', $(window).scrollTop(), $(document).height());
        		if($(window).scrollTop() <= 400) {
            		$('#arrowDown').removeClass('hide');
        		} else {
            		$('#arrowDown').addClass('hide');
        		}
   			});
		});


		$(function() {
    		$(window).scroll(function() {
        		console.log('scrolling ', $(window).scrollTop(), $(document).height());
        		if($(window).scrollTop() >= 1100) {
            		$('#arrowUp').removeClass('hide');
        		} else {
            		$('#arrowUp').addClass('hide');
        		}
   			});
		});


// Section-c Accordion transition 

		var acc = document.getElementsByClassName("accordion");
		var i;

		for(i=0; i < acc.length; i++){
			acc[i].onclick = function(){
				this.classList.toggle("active");

				var panel = this.nextElementSibling;

				if(panel.style.maxHeight){
					panel.style.maxHeight = null;
				} 

				else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
			}
		}


// SLIDESHOW on Services Section-C 

		$(function(){
		    $('.fadein img:gt(0)').hide();
		    setInterval(function(){
		      $('.fadein :first-child').fadeOut()
		         .next('img').fadeIn()
		         .end().appendTo('.fadein');}, 
		      4000);
		});

$(document).ready(function () {
    checkScroll(); 
    $(window).scroll(checkScroll);
});

function checkScroll() { 
if ($(window).scrollTop() >= 300) { 
    $('.navbar').addClass('solid');
} else { 
    $('.navbar').removeClass('solid');
}
}

$(document).ready(function () {
	checkScroll();
	$(window).scroll(checkScroll);
	$('.navbar-toggler').click(function () {
		if (!$('.navbar').hasClass('solid-toggle')) {
			if ($(window).scrollTop() <= 300) {
				$('.navbar').toggleClass('solid-toggle');
			}
		}
	});
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('.navbar-toggler').addClass('collapsed');
    $('#navbarResponsive').removeClass('show');

    setTimeout(function () {
        $('nav.navbar').removeClass('solid-toggle');
    }, 300);

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

$(document).ready(function () {
    $(window).scroll(function () {
        $('.arrow').css('opacity', 1 - $(window).scrollTop() / 250);
    });
});


$(document).ready(function () {
    lightbox.option({
        'resizeDuration': 600,
        'wrapAround': true,
        'imageFadeDuration': 500
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.top-scroll').fadeIn();
        } else {
            $('.top-scroll').fadeOut();
        }
    });
});


$(document).ready(function () {
    if ($(window).width() < 768) {
        $('div').attr('data-animation', 'animate__animated animate__fadeInUp');
    }
});

$(function () {
  function onScrollInit(items, trigger) { 
      items.each(function () { 
          var osElement = $(this), 
              osAnimationClass = osElement.attr('data-animation'),
              osAnimationDelay = osElement.attr('data-delay'); 

          osElement.css({ 
              '-webkit-animation-delay': osAnimationDelay, 
              '-moz-animation-delay': osAnimationDelay,
              'animation-delay': osAnimationDelay 
          });

          var osTrigger = (trigger) ? trigger : osElement; 
          osTrigger.waypoint(function () { 
              osElement.addClass('animated').addClass(osAnimationClass); 
          }, {
                  triggerOnce: true,
                  offset: '70%'
              });
      });
  }

  onScrollInit($('.os-animation')); 
  onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); 
});

$(function () {

  $('#contact-form').validator();


  $('#contact-form').on('submit', function (e) {

      if (!e.isDefaultPrevented()) {
          var url = "contact/gmail-contact.php";

          $.ajax({
              type: "POST",
              url: url,
              data: $(this).serialize(),
              success: function (data) {

                  var messageAlert = 'alert-' + data.type;
                  var messageText = data.message;

                  var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                  if (messageAlert && messageText) {
                      $('#contact-form').find('.messages').html(alertBox);
                      $('#contact-form')[0].reset();
                  }
              }
          });
          return false;
      }
  })
});
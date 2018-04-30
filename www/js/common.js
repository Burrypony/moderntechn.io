$(function() {
    // ============================ HEADER ================================

    // ========================= CAROUSEL =================================
    if (screen.width > 992) {
        $('.main').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            autoplay: true,
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            prevArrow: '<button type="button" class="slick-prev">Previous</button>'
        })
    }
    if (screen.width < 992) {
        $('.main').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: false
        })
    }
    if (screen.width < 992) {
        $('.wind-cont').slick({
            infinite: true,
            slidesToShow: 1.7,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: false
        })
    }
    // ================== CALLBACK AND MODAL ===============================
    $('.tellephone').click(function (e) {
        e.preventDefault();
        $('.tellephone-modal').fadeToggle();
        $('.modal-container').fadeToggle();
        $('.up-button').fadeOut();
    })
    setInterval(changeTell, 6000)

    $(".menu a, .header-button").click(function (event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top}, 2000);
    });
    $('.modal-container').click(function () {
        $('.tellephone-modal').fadeOut();
        $('.sell-modal').fadeOut();
        $('.set-modal').fadeOut();
        $(this).fadeOut();
        $('.tellephone').fadeIn();
        $('.up-button').fadeIn();
    })
    $('.close-img').click(function () {
        $('.tellephone-modal').fadeOut();
        $('.sell-modal').fadeOut();
        $('.set-modal').fadeOut();
        $('.modal-container').fadeOut();
        $('.tellephone').fadeIn();
        $('.up-button').fadeIn();
    })
    $("#burger-container").on('click', function () {
        $(this).toggleClass("open");
        $('.menu').toggleClass('menu-open')
    });
    // ============================ UP BUTTON =========================
    if (screen.width > 992) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 760) {
                $('.up-button').fadeIn();
            } else {
                $('.up-button').fadeOut();
            }
        });

        $('.up-button').click(function () {
            $('html, body').animate({scrollTop: 0}, 1300);
            return false;
        });

        $('.up-button').mouseover(function () {
            $(this).css('background-color', '#d7e1e7');
            $(this).children('#up-svg').css({
                "fill": "#ffffff"
            })
        })
        $('.up-button').mouseleave(function () {
            $(this).css('background-color', '#f7f7f7');
            $(this).children('#up-svg').css({
                "fill": "#D7E1E7"
            })
        })
    }

    if (screen.width < 992) {
        $('.up-button').remove();
    }
    // ============================= CARDS ===============================
    if(screen.width > 992){
    	$('.window').hover(function () {
            $(this).addClass('active-window')
            $(this).siblings().removeClass('active-window')
            $(this).children('.window-icon').css("background-image", "linear-gradient( 90deg, rgb(240,240,240) 0%, rgb(241,241,241) 15%, rgb(242,242,242) 44%, rgb(244,244,244) 77%, rgb(245,245,245) 100%)")
            if ($(this).children('.window-icon').hasClass('window-icon-pig')) {
                $(this).children('.window-icon').children('#pig-svg').css({
                    "fill": "url(#pig-grad)"
                })
            } else if ($(this).children('.window-icon').hasClass('window-icon-usb')) {
                $(this).children('.window-icon').children('#usb-svg').css({
                    "fill": "url(#usb-grad)"
                })
            } else if ($(this).children('.window-icon').hasClass('window-icon-gift')) {
                $(this).children('.window-icon').children('#gift-svg').css({
                    "fill": "url(#gift-grad)"
                })
            }
        })
    $('.window').mouseleave(function () {
        $(this).removeClass('active-window')
        $(this).children('.window-icon').css("background-image", "none")
        if ($(this).children('.window-icon').hasClass('window-icon-pig')) {
            $(this).children('.window-icon').children('#pig-svg').css({
                "fill": "#87A3B2"
            })
        } else if ($(this).children('.window-icon').hasClass('window-icon-usb')) {
            $(this).children('.window-icon').children('#usb-svg').css({
                "fill": "#87A3B2"
            })
        } else if ($(this).children('.window-icon').hasClass('window-icon-gift')) {
            $(this).children('.window-icon').children('#gift-svg').css({
                "fill": "#87A3B2"
            })
        }
    })
    }
	//============================== USB-SECTION =========================
	function changeUsb() {
		$('.usb-img').fadeOut();
		$('.usb-img2').fadeIn();
		setTimeout(function(){
		$('.usb-img2').fadeOut();
		$('.usb-img').fadeIn();
		}, 5000)
	}
	setInterval(changeUsb, 10000)
	function changeTell(){
		$('.tellephone-img').fadeOut();
		$('.tellephone-text').fadeIn();
		setTimeout(function(){
		$('.tellephone-text').fadeOut();
		$('.tellephone-img').fadeIn();
		}, 3000)
	}
	// ====================== SHOP SECTION ==============================

	// ====================== COLOR BUTTONS =============================
	$('.black').click(function(){
		$(this).css('border-color', '#cacaca')
		$(this).siblings().css('border-color', 'transparent')
		$(this).parent('.color-buttons1').siblings('img').attr('src', 'img/PBcover-1.png')
		$(this).parent('.color-buttons2').siblings('img').attr('src', 'img/cover-1.png')
		$('.set-modal-img').attr('src', 'img/cover-1.png')
		$('.color').attr('value', 'black')
	})
	$('.black-1').click(function(){
		$('.color-1').attr('value', 'black')
	})
	$('.black-2').click(function(){
		$('.color-2').attr('value', 'black')
	})
	$('.black-3').click(function(){
		$('.color-3').attr('value', 'black')
	})
	$('.blue').click(function(){
		$(this).css('border-color', '#cacaca')
		$(this).siblings().css('border-color', 'transparent')
		$(this).parent('.color-buttons1').siblings('img').attr('src', 'img/PBcover-2.png')
		$(this).parent('.color-buttons2').siblings('img').attr('src', 'img/cover-2.png')
		$('.set-modal-img').attr('src', 'img/cover-2.png')
		$('.color').attr('value', 'blue')

	})
	$('.blue-1').click(function(){
		$('.color-1').attr('value', 'blue')
	})
	$('.blue-2').click(function(){
		$('.color-2').attr('value', 'blue')
	})
	$('.blue-3').click(function(){
		$('.color-3').attr('value', 'blue')
	})
	$('.red').click(function(){
		$(this).css('border-color', '#cacaca')
		$(this).siblings().css('border-color', 'transparent')
		$(this).parent('.color-buttons1').siblings('img').attr('src', 'img/PBcover-3.png')
		$(this).parent('.color-buttons2').siblings('img').attr('src', 'img/cover-3.png')
		$('.set-modal-img').attr('src', 'img/cover-3.png')
		$('.color').attr('value', 'red')

	})
	$('.red-1').click(function(){
		$('.color-1').attr('value', 'red')
	})
	$('.red-2').click(function(){
		$('.color-2').attr('value', 'red')
	})
	$('.red-3').click(function(){
		$('.color-3').attr('value', 'red')
	})
	// ============================== CLICK BUTTON =================================
	$('.sell-button-1').click(function(e){
    	e.preventDefault();
    	$('.sell-modal-1').fadeToggle();
    	$('.modal-container').fadeToggle();
    	var shopImg = $(this).siblings('img').attr('src')
    	console.log(shopImg)
    	$('.sell-modal-img').attr('src', shopImg)
    	$('.tellephone').fadeOut();
    	$('.up-button').fadeOut();
    })
    $('.sell-button-2').click(function(e){
    	e.preventDefault();
    	$('.sell-modal-2').fadeToggle();
    	$('.modal-container').fadeToggle();
    	var shopImg = $(this).siblings('img').attr('src')
    	console.log(shopImg)
    	$('.sell-modal-img').attr('src', shopImg)
    	$('.tellephone').fadeOut();
    	$('.up-button').fadeOut();
    })
    $('.sell-button-3').click(function(e){
    	e.preventDefault();
    	$('.sell-modal-3').fadeToggle();
    	$('.modal-container').fadeToggle();
    	var shopImg = $(this).siblings('img').attr('src')
    	console.log(shopImg)
    	$('.sell-modal-img').attr('src', shopImg)
    	$('.tellephone').fadeOut();
    	$('.up-button').fadeOut();
    })

    // ========================== COUNTER =============================
    var count1 = 1;
    var plus1 = $('.plus-img-1');
    var minus1 = $('.minus-img-1');
    var oneItem1 = $('.one-item-1').html()
    $('.counter-number-1').html(count1)
    $('.counter-num1').attr('value', count1)
    $('.price-number-1').html(count1*oneItem1 +'грн')
    $('.pricee1').attr('value', count1*oneItem1 +'грн')
    plus1.click(function(){
    	count1++;
    	$('.counter-number-1').html(count1)
    	$('.counter-num1').attr('value', count1)
    	$('.price-number-1').html(count1*oneItem1 +'грн')
    	$('.pricee1').attr('value', count1*oneItem1 +'грн')
    })
    minus1.click(function(){
    	if(count1 > 1){
    		count1--
    	} else{
    		count1
    	}

    	$('.counter-number-1').html(count1)
    	$('.counter-num1').attr('value', count1)
    	$('.price-number-1').html(count1*oneItem1 +'грн')
    	$('.pricee1').attr('value', count1*oneItem1 +'грн')
    })

    var count2= 1;
    var plus2 = $('.plus-img-2');
    var minus2 = $('.minus-img-2');
    var oneItem2 = $('.one-item-2').html()
    $('.counter-number-2').html(count2)
    $('.counter-num2').attr('value', count2)
    $('.price-number-2').html(count2*oneItem2 +'грн')
    $('.pricee2').attr('value', count2*oneItem2 +'грн')
    plus2.click(function(){
    	count2++;
    	$('.counter-number-2').html(count2)
    	$('.counter-num2').attr('value', count2)
    	$('.price-number-2').html(count2*oneItem2 +'грн')
    	$('.pricee2').attr('value', count2*oneItem2 +'грн')
    })
    minus2.click(function(){
    	if(count2 > 1){
    		count2--
    	} else{
    		count2
    	}

    	$('.counter-number-2').html(count2)
    	$('.counter-num2').attr('value', count2)
    	$('.price-number-2').html(count2*oneItem2 +'грн')
    	$('.pricee2').attr('value', count2*oneItem2 +'грн')
    })
    var count3= 1;
    var plus3 = $('.plus-img-3');
    var minus3 = $('.minus-img-3');
    var oneItem3 = $('.one-item-3').html()
    $('.counter-number-3').html(count3)
    $('.counter-num3').attr('value', count3)
    $('.price-number-3').html(count3*oneItem3 +'грн')
    $('.pricee3').attr('value', count3*oneItem3 +'грн')
    plus3.click(function(){
    	count3++;
    	$('.counter-number-3').html(count3)
    	$('.counter-num3').attr('value', count3)
    	$('.price-number-3').html(count3*oneItem3 +'грн')
    	$('.pricee3').attr('value', count3*oneItem3 +'грн')
    })
    minus3.click(function(){
    	if(count3 > 1){
    		count3--
    	} else{
    		count3
    	}

    	$('.counter-number-3').html(count3)
    	$('.counter-num3').attr('value', count3)
    	$('.price-number-3').html(count3*oneItem3 +'грн')
    	$('.pricee3').attr('value', count3*oneItem3 +'грн')
    })

// ==================== SET MODAL ========================
$('.set-button').click(function(e){
	e.preventDefault();
    	$('.set-modal').fadeToggle();
    	$('.modal-container').fadeToggle();
    	$('.tellephone').fadeOut();
    	$('.up-button').fadeOut();
})
    var count4= 1;
    var plus4 = $('.plus-img-4');
    var minus4 = $('.minus-img-4');
    var oneItem4 = $('.one-item-4').html()
    $('.counter-number-4').html(count4)
    $('.counter-num4').attr('value', count4)
    $('.price-number-4').html(count4*oneItem4 +'грн')
    $('.pricee4').attr('value', count4*oneItem4 +'грн')
    plus4.click(function(){
    	count4++;
    	$('.counter-number-4').html(count4)
    	$('.counter-num4').attr('value', count4)
    	$('.price-number-4').html(count4*oneItem4 +'грн')
    	$('.pricee4').attr('value', count4*oneItem4 +'грн')
    })
    minus4.click(function(){
    	if(count4 > 1){
    		count4--
    	} else{
    		count4
    	}

    	$('.counter-number-4').html(count4)
    	$('.counter-num4').attr('value', count4)
    	$('.price-number-4').html(count4*oneItem4 +'грн')
    	$('.pricee4').attr('value', count4*oneItem4 +'грн')
    })

    // ===================== SOCIAL ======================
});

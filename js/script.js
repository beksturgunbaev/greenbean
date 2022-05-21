
$(document).ready(function() {
    if($(window).width() < 767) {
        $('.types-parent').slick( {
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
        });
        $('.first-img').addClass('active');
        $('.about-title').addClass('active');
        $('.second-img').addClass('active');
        $('.mob-text-two').addClass('active');
    } else {
        // Clicks to the products onthe first section:
        $('.product-link1').on("click", function(e){
            var top = $("#first-product_list").offset().top -50;
            $('html,body').animate({
            scrollTop: top
            }, 900);
        });
        $('.product-link2').on("click", function(e){
            var top = $("#second-product_list").offset().top -50;
            $('html,body').animate({
            scrollTop: top
            }, 900);
        });
        $('.product-link3').on("click", function(e){
            var top = $("#thirth-product_list").offset().top -50;
            $('html,body').animate({
            scrollTop: top
            }, 900);
        });
        $('.product-link4').on("click", function(e){
            var top = $("#fourth-product_list").offset().top -50;
            $('html,body').animate({
            scrollTop: top
            }, 900);
        });
        $('.proiz-link-two').on("click", function(e){
            var top = $("#form-block").offset().top;
            $('html,body').animate({
            scrollTop: top
            }, 900);
        });
    }

    // SetTimeOut for auhentification modal:
    setTimeout(function() {
        $('.authen-content').addClass('active');
    }, 1000);
    $('.yes-btn').click(function() {
        $('.authen-content').removeClass('active');
        setTimeout(function() {
            $('.authen-modal').addClass('active');
            $('body').removeClass('hide');
        }, 500);
    });
    $('.no-btn').click(function() {
        $('.true-div').removeClass('active');
        $('.false-div').addClass('active');
    });

    // burger menu
    $('.burger-menu').click(function() {
        $('.mobile-menu').addClass('active');
        $('.bg-color').addClass('active');
    });
    // Click to the background
    $('.bg-color').click(function(e) {
        $('.mobile-menu').removeClass('active');
        $('.bg-color').removeClass('active');
    });

    $('.mob-menu-hide').click(function() {
        $('.mobile-menu').removeClass('active');
        $('.bg-color').removeClass('active');
    });

    $('.proiz-link').on("click", function(e){
        e.preventDefault();
        
        if($(window).width() < 767) {
            var top = $("#proizvodstvo").offset().top -50;
        } else {
            var top = $("#proizvodstvo").offset().top;
        }
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });

    $('.partner-link').on("click", function(e){
        e.preventDefault();
        
        if($(window).width() < 767) {
            var top = $("#partners").offset().top -50;
        } else {
            var top = $("#partners").offset().top;
        }
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });


    $('.types-link').on("click", function(e){
        e.preventDefault();
        if($(window).width() < 767) {
            var top = $("#types").offset().top -50;
        } else {
            var top = $("#types").offset().top;
        }
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });

    $('.prod-link').on("click", function(e){
        e.preventDefault();
        if($(window).width() < 767) {
            var top = $("#production").offset().top -50;
        } else {
            var top = $("#production").offset().top;
        }
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });

    $('.form-link').on("click", function(e){
        e.preventDefault();
        if($(window).width() < 767) {
            var top = $("#form-block").offset().top -50;
        } else {
            var top = $("#form-block").offset().top;
        }
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });

    $('.header-btn').on("click", function(e){
        e.preventDefault();
        if($(window).width() < 767) {
            var top = $("#form-block").offset().top -50;
        } else {
            var top = $("#form-block").offset().top;
        }
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });

 

    // Click to stars:

    var star = $('.star-svg');

    star.click(function() {
        $(this).toggleClass('active');
        $(this).prevAll().addClass('active');
        $(this).nextAll().removeClass('active');
    });

    $(function () {
        $('.marquee').marquee({
            duration: 35000,
            startVisible: true,
            duplicated: true
        });
    });
});


// Scripts for animations:

const animItems = document.querySelectorAll('.anim-item');

if(animItems.length > 0) {
    window.addEventListener('scroll', showAnimation);
    function showAnimation() {
        for(let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];          
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active__class');    
            }
            else {
                if(!animItem.classList.contains('no-anim')) {
                    animItem.classList.remove('active__class');    
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop, left: rect.left + scrollLeft
        }
    }
}

setTimeout(showAnimation, 800);

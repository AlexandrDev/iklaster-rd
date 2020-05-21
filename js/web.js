$.fn.allCoursesTabs = function() {
    let $container = this,
        $cat_link = $container.find('.left-menu__item'),
        $tab_link = $container.find('.right-menu__tab'),
        active_cls = 'active';

    $container.find('.all-courses__link').click(function() {
        $('body').addClass('all-courses-showed');
    });

    $container.find('.all-courses-menu__close').click(function() {
        $('body').removeClass('all-courses-showed');
    });


    $cat_link.on('click', function() {
        $cat_link.removeClass(active_cls);
        $(this).addClass(active_cls);

        $container.find('.right-menu').removeClass(active_cls);
        $container.find('.right-menu:eq(' + $(this).index() + ')').addClass(active_cls);
    });

    $tab_link.on('click', function() {
        let $tabContainer = $(this).parents('.right-menu');
        
        $tab_link.removeClass(active_cls);
        $(this).addClass(active_cls);

        $tabContainer.find('.right-menu__content').removeClass(active_cls);
        $tabContainer.find('.right-menu__content:eq(' + $(this).index() + ')').addClass(active_cls);
    });
};


// $.ready
(function($) {
    $('.all-courses-menu').show(); // fix transition

    $('.all-courses').allCoursesTabs();

    // mobile menu
    $('.hamburger').click(function() {
        if ($('body').hasClass('menu-opened') ) {
            $('.mobile-menu-parent').removeClass('expanded');
        }
        $('body').toggleClass('menu-opened');
    });


    let navExpand = [].slice.call(document.querySelectorAll('.mobile-menu-parent'));

    navExpand.forEach((item) => {
        item.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            $('.mobile-menu__content').stop().animate({scrollTop:0}, 200, 'swing');
            item.classList.add('expanded');
        });
        item.querySelector('.back-arrow').addEventListener('click', () => item.classList.remove('expanded'));
    });

    
    let custom_scroll;
    
    if (custom_scroll = document.querySelector('.custom-scroll')) {
        let simplebar = new SimpleBar(custom_scroll, { 
            autoHide: false 
        });
    }


    let top_dynamic_text;

    if (top_dynamic_text = document.querySelector('.top-dynamic-text')) {
        let typed = new Typed(top_dynamic_text, {
            strings: [
                'профессиональной переподготовке', 
                'правовому управлению',
                'ещё чему-нибудь'
            ],
            loop: true,
            typeSpeed: 10,
            backSpeed: 10,
            backDelay: 1400,
            cursorChar: '_',
        });
    }
    

    // animate
    let windowHeight = $(window).height();

    function animateElements() {
        $('.animate').each(function() {
            var positionTop = $(this).offset().top,
                scrollPos = $(window).scrollTop();

            if (scrollPos + windowHeight >= positionTop) {
                $(this).addClass('animated');
            }
        });
    }

    animateElements();

    $(window).scroll(function(){
		animateElements();
	});
        
})(jQuery);
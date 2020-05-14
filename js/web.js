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


    let simplebar = new SimpleBar(document.querySelector('.custom-scroll'), { 
        autoHide: false 
    });

    let typed = new Typed('.top-dynamic-text', {
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
        
})(jQuery);
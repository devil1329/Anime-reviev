var heroShinker = function() {
    var hero = $('.hero-nav'),
        heroHeight = $('.hero-nav').outerHeight(true);
    var navBar = $('#NavBar');
    var carousel = $('#heroCarousel');
        $(hero).parent().css('padding-top', heroHeight);
    $(window).scroll(function() {
        var scrollOffset = $(window).scrollTop();
        if (scrollOffset < heroHeight) {
            $(hero).css('height', (heroHeight - scrollOffset));
        }
        if (scrollOffset > (heroHeight - 220)) {
            hero.addClass('fixme');
            navBar.addClass('navBgColor').addClass('navbar-dark');
            carousel.fadeOut("fast");
    } else {
            hero.removeClass('fixme');
            carousel.fadeIn("fast");
            navBar.removeClass('navBgColor').removeClass('navbar-dark');
        };
    });
}
heroShinker();
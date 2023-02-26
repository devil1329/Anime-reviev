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
        if (scrollOffset > (heroHeight - 150)) {
            hero.addClass('fixme');
            navBar.addClass('navbar-dark');
            carousel.fadeOut("slow");
    } else {
            hero.removeClass('fixme');
            navBar.removeClass('navbar-dark');
            carousel.fadeIn("slow");
        };
    });
}
heroShinker();
var heroShinker = function () {
    var hero = $('.hero-nav'),
        heroHeight = $('.hero-nav').outerHeight(true);
    var navBar = $('#NavBar');
    var carousel = $('#heroCarousel');
    $(hero).parent().css('padding-top', heroHeight);
    $(window).scroll(function () {
        var scrollOffset = $(window).scrollTop();
        if (scrollOffset < heroHeight) {
            $(hero).css('height', (heroHeight - scrollOffset));
        }
        if (scrollOffset > (heroHeight - 220)) {
            hero.addClass('fixme');
            navBar.addClass('navBgColor');
            carousel.fadeOut("fast");
        } else {
            hero.removeClass('fixme');
            carousel.fadeIn("fast");
            navBar.removeClass('navBgColor');
        };
    });
}
heroShinker();

// about us 
$(document).ready(function () {

    var curPage = 1;
    var numOfPages = $(".skw-page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".skw-page-";

    function pagination() {
        scrolling = true;

        $(pgPrefix + curPage).removeClass("inactive").addClass("active");
        $(pgPrefix + (curPage - 1)).addClass("inactive");
        $(pgPrefix + (curPage + 1)).removeClass("active");

        setTimeout(function () {
            scrolling = false;
        }, animTime);
    };

    function navigateUp() {
        if (curPage === 1) return;
        curPage--;
        pagination();
    };

    function navigateDown() {
        if (curPage === numOfPages) return;
        curPage++;
        pagination();
    };

    $(document).on("mousewheel DOMMouseScroll", function (e) {
        if (scrolling) return;
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            navigateUp();
        } else {
            navigateDown();
        }
    });

    $(document).on("keydown", function (e) {
        if (scrolling) return;
        if (e.which === 38) {
            navigateUp();
        } else if (e.which === 40) {
            navigateDown();
        }
    });

});
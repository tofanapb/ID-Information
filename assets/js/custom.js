(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        //Menu
        $("#mobileMenu").click(function () {
            $("#menuArea").toggle(400);
        });


        jQuery(window).resize(function () {
            var screenwidth = jQuery(window).width();
            if (screenwidth > 767) {
                jQuery("#menuArea").removeAttr("style");

            }
        });

        //       scroll_top   
        $(window).scroll(function () {
            if ($(this).scrollTop()) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $("#toTop").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        });
		

    });


}(jQuery));

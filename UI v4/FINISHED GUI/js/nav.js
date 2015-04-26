$('body').ready(function(){

    $('html').css("visibility", "visible");

});



$(window).scroll(function() {
    if ($(this).scrollTop() > 0) { //use `this`, not `document`
        $('.brand-nav').css({
            'display': 'none'
        });
    }


    if ($(this).scrollTop() == 0) { //use `this`, not `document`
        $('.brand-nav').css({
            'display': 'block'
        });
    }

    console.log("SCROLLING" + $(this).scrollTop() );


});



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

$(document).ready(function(){

    $('#navUlContainer1 li').click(function(e) {

        $('#navUlContainer1 li').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        //e.preventDefault();
    });

});
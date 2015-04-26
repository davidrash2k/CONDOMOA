$(document).ready(function(){

var classCount = $('.commentCol').length;
var temp;
var index;

console.log("classcount" + classCount);


if(classCount > 0)
	$('.empty-message-row').css("display", "none");


if(classCount > 3){

$( ".commentCol" ).each(function( index ) {

if(index > 2){
  	console.log("PASS");
    $(this).css("display", "none");
}

});




}


$('.seeMoreBtn').click(function(){
$( ".commentCol" ).each(function( index ) {
    $(this).css("display", "inline");
});
});


$('.hideBtn').click(function(){
$( ".commentCol" ).each(function( index ) {
    $(this).css("display", "inline");
});


$('.hideBtn').html("See more");
$('.hideBtn').addClass('seeMoreBtn');
$('.hideBtn').removeClass('hideBtn');

});




});

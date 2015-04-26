$(document).ready(function(){

var classCount = $('.resultDesc').length;
var temp;
var index;



$( ".resultDesc" ).each(function( index ) {
  if($(this).text().length > 210){
	$(this).text($(this).text().substring(0,210) + "...");

}
});



});

$(document).ready(function(){

var classCount = $('.newCondoDescriptionCol').length;
var temp;
var index;



$( ".newCondoDescriptionCol" ).each(function( index ) {
  if($(this).text().length > 400){
	$(this).text($(this).text().substring(0,400) + "...");
	console.log("PASS");

}
});



});

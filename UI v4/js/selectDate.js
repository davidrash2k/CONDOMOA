$(document).ready(function(){
		var options = '	<option value="" disabled selected>Day</option>';

		for(var i=1; i<=31; i++){
				options +='<option value='+i+'>'+i+'</option>';

		// 		if(i !=1){
		// options +='<option value='+i+'>'+i+'</option>';
		// }else{
		// options +='<option value='+i+' selected>'+i+'</option>';
		// }
		}
    $('#dayInput').html(options);
	
		options = '<option value="" disabled selected>Year</option>';
		for(var i=1940; i<=2010; i++){
				options +='<option value='+i+'>'+i+'</option>';

		// 	if(i !=1940){
		// options +='<option value='+i+'>'+i+'</option>';
		// }else{
		// options +='<option value='+i+' selected>'+i+'</option>';
		// }
		
		}
    $('#yearInput').html(options);
	
//	console.log(  $('#DOByear').val());
	
$('#monthInput').change(function() {
	days=31;

	var options = '	<option value="" disabled selected>Day</option>';
  
    if($(this).val()%2 == '1') {
      days=31;
    }
    else if ($(this).val() == '2'){
       days=28
    }else{
		days=30
	}
	for(var i=1; i<=days; i++){
		options +='<option value='+i+'>'+i+'</option>';
	}
    $('#dayInput').html(options);
});


});
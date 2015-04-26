function readURL(input) {



var className = $(input).attr('name');
var index = className.slice(-1);

console.log("className: " + index);



    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#addCondoPic" + index).attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


function preview(select){	
	$(select).change(function(){
    readURL(select);
});
}




$(document).ready(function(){

$("#canceltBtn").click(function(){



		 $(".addCondoPic").attr('src', "#");



});

});





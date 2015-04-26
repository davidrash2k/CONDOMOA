function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#registrationPic').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#selectProfilePicBtn").change(function(){
    readURL(this);
});
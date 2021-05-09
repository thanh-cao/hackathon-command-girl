$(document).ready(function(){
    $("#name").on("keydown", function (e) {
        var inputValue = $("#name").val();
        if (inputValue.length == 0 || inputValue.slice(-1) == " ") {
            return e.which !== 32;
        }
    });
    $("#message").on("keydown", function (e) {
        var inputValue = $("#message").val();
        if (inputValue.length == 0 || inputValue.slice(-1) == " ") {
            return e.which !== 32;
        }
    });
})
$('.navbar-nav>li>a').on('click', function () {
     $('.navbar-collapse').collapse('hide');
});

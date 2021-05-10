$(document).ready(function () {
    $("input").on("keydown", function (e) {
        var inputValue = $("input").val();
        if (inputValue.length == 0 || inputValue.slice(-1) == " ") {
            return e.which !== 32;
        }
    });
    $("textarea").on("keydown", function (e) {
        var inputValue = $("textarea").val();
        if (inputValue.length == 0 || inputValue.slice(-1) == " ") {
            return e.which !== 32;
        }
    });
});

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$('#partnerContactForm, #mentorContactForm').on('submit', function (e) {
    $('#messageSentModal').modal('show');
    e.preventDefault();
});

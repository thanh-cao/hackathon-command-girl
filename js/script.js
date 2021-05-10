$(document).ready(function(){
    // displays return to top button
    var bttt = document.getElementById("returnToTop");
            
    window.onscroll = function() {
        showButton();
    };

    function showButton() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            bttt.style.display = "block";
        } else {
            bttt.style.display = "none";
        }
    }

    // prevents multiple whitespace input in forms

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

$('#partnerContactForm, #mentorContactForm, #signUpForm').on('submit', function (e) {
    $('#messageSentModal').modal('show');
    e.preventDefault();
});

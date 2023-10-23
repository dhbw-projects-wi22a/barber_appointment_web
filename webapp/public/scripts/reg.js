$(function() {
    // Toggle between "Sign In" and "Sign Up"
    $(".btn").click(function() {
        $(".form-signin").toggleClass("form-signin-left");
        $(".form-signup").toggleClass("form-signup-left");
        $(".frame").toggleClass("frame-long");
        $(".signup-inactive").toggleClass("signup-active");
        $(".signin-active").toggleClass("signin-inactive");
        $(".forgot").toggleClass("forgot-left");
        $(this).removeClass("idle").addClass("active");
    });

    // Handling the "Sign Up" button click
    $(".btn-signup").click(function() {
        $(".nav").toggleClass("nav-up");
        $(".form-signup-left").toggleClass("form-signup-down");
        $(".success").toggleClass("success-left");
        $(".frame").toggleClass("frame-short");
    });

    // Handling the "Sign In" button click
    $(".btn-signin").click(function() {
        $(".btn-animate").toggleClass("btn-animate-grow");
        $(".welcome").toggleClass("welcome-left");
        $(".cover-photo").toggleClass("cover-photo-down");
        $(".frame").toggleClass("frame-short");
        $(".profile-photo").toggleClass("profile-photo-down");
        $(".btn-goback").toggleClass("btn-goback-up");
        $(".forgot").toggleClass("forgot-fade");
    });

    // Event-Handler to show/hide the password
    $(".showpw").click(function() {
        const PasswordField = $("input[name='password']");
        if (PasswordField.attr("type") === "password") {
            PasswordField.attr("type", "text"); // show password
        } else {
            PasswordField.attr("type", "password"); // hide password
        }
    });
});
    






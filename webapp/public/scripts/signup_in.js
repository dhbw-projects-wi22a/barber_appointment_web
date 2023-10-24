// Warten auf das Laden des DOM, um sicherzustellen, dass die HTML-Elemente verfügbar sind
document.addEventListener("DOMContentLoaded", function () {
    // Hier fügen wir Event-Listener für die Links hinzu
    document
      .getElementById("login-pw-recovery")
      .addEventListener("click", goToPasswordRecovery);
    document.getElementById("login-signup").addEventListener("click", goToSignUp);
    document.getElementById("login-signup-landing").addEventListener("click",goToSignUp);
    document.getElementById("login-signin-landing").addEventListener("click",goToLogin);
    document.getElementById("book-appointment-landing").addEventListener("click",goToCalendar);

  });

  // Event-Handler to show/hide the password
  $(".showpw").click(function () {
    const PasswordField = $("input[name='password']");
    if (PasswordField.attr("type") === "password") {
      PasswordField.attr("type", "text"); // show password
    } else {
      PasswordField.attr("type", "password"); // hide password
    }
  });

// Button-function password recovery
function goToPasswordRecovery() {
  window.location.href = "../subpages/NewPassword.html";
}

// Button-function signup
function goToSignUp() {
  window.location.href = "../subpages/SignUp.html";
}

// Button-function login
function goToLogin() {
    window.location.href="../subpages/SignIn.html";
}

// Button-function calendar
function goToCalendar() {
    window.location.href="../calendar/calendar_v1.html";
}
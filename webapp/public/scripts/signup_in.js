
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

// Button-function signup (homepage)
function goToSignUpHP() {
  window.location.href = "./subpages/SignUp.html";
}

// Button-function login (homepage)
function goToLoginHP() {
    window.location.href="./subpages/SignIn.html";
}

// Button-function calendar (homepage)
function goToCalHP() {
    window.location.href="./calendar/calendar_v1.html";
}

// Warten auf das Laden des DOM, um sicherzustellen, dass die HTML-Elemente verfügbar sind
document.addEventListener("DOMContentLoaded", function () {
  // Event Listener für Password Recovery (falls das Element auf der aktuellen Seite vorhanden ist)
  var passwordRecoveryButton = document.getElementById("login-pw-recovery");
  if (passwordRecoveryButton) {
    passwordRecoveryButton.addEventListener("click", goToPasswordRecovery);
  }

  // Event Listener für Sign-Up (falls das Element auf der aktuellen Seite vorhanden ist)
  var signUpButton = document.getElementById("login-signup");
  if (signUpButton) {
    signUpButton.addEventListener("click", goToSignUp);
  }

  // Event Listener für Sign-Up auf der Startseite (falls das Element auf der aktuellen Seite vorhanden ist)
  var signUpButtonLanding = document.getElementById("login-signup-landing");
  if (signUpButtonLanding) {
    signUpButtonLanding.addEventListener("click", goToSignUpHP);
  }

  // Event Listener für Sign-In auf der Startseite (falls das Element auf der aktuellen Seite vorhanden ist)
  var signInButtonLanding = document.getElementById("login-signin-landing");
  if (signInButtonLanding) {
    signInButtonLanding.addEventListener("click", goToLoginHP);
  }

  // Event Listener für Calendar auf der Startseite (falls das Element auf der aktuellen Seite vorhanden ist)
  var calendarButtonLanding = document.getElementById("book-appointment-landing");
  if (calendarButtonLanding) {
    calendarButtonLanding.addEventListener("click", goToCalHP);
  }
});

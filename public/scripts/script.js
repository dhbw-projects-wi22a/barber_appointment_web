// Event-Handler to show/hide the password
$(".showpw").click(function () {
  const PasswordField = $("input[name='password']");
  if (PasswordField.attr("type") === "password") {
    PasswordField.attr("type", "text"); // show password
  } else {
    PasswordField.attr("type", "password"); // hide password
  }
});


// timeSelecter 
document.addEventListener("DOMContentLoaded", function () {
  const openingHour = 10;
  const closingHour = 18; 

  const hourDropdown = document.getElementById("hour");
  const minuteDropdown = document.getElementById("minute");

  // Erstelle Optionen für die Stunden
  for (let hours = openingHour; hours <= closingHour; hours++) {
    const option = document.createElement("option");
    option.value = hours;
    option.text = hours;
    hourDropdown.appendChild(option);
  }

  // Funktion, um die ausgewählte Zeit zu erhalten
  function getSelectedTime() {
    const selectedHour = hourDropdown.value;
    const selectedMinute = minuteDropdown.value;
    return `${selectedHour}:${selectedMinute}`;
  }

  // Aktualisiere die Zeit beim Laden der Seite
  function updateSelectedTime() {
    const selectedTime = getSelectedTime();
    //console.log(selectedTime); // Zum Testen ob korrekte Zeit übergeben wird
  }

  // Aktualisiere das timePicker-Element, wenn die Auswahl geändert wird
  hourDropdown.addEventListener("change", updateSelectedTime);
  minuteDropdown.addEventListener("change", updateSelectedTime);

  // Aktualisiere die Zeit beim Laden der Seite
  updateSelectedTime();
});

//dateSelecter 


//serviceOptionSelecter 

// check if date is available

//check if option + date + time is selected

//check that enough time is given example -> appointmentTime = 18:45 but service duration = 30min

// Button-function password recovery
function goToPasswordRecovery() {
  window.location.href = "./subpages/NewPassword.html";
}

// Button-function signup
function goToSignUp() {
  window.location.href = "./subpages/SignUp.html";
}

// Button-function login
function goToLogin() {
  window.location.href = "./subpages/SignIn.html";
}


// Button-function signup (homepage)
function goToSignUpHP() {
  window.location.href = "/subpages/SignUp.html";
}

// Button-function login (homepage)
function goToLoginHP() {
  window.location.href = "/subpages/SignIn.html";
}

// Button-function calendar (homepage)
function goToCalHP() {
  window.location.href = "/calendar/calendar_v1.html";
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
  var calendarButtonLanding = document.getElementById(
    "book-appointment-landing"
  );
  if (calendarButtonLanding) {
    calendarButtonLanding.addEventListener("click", goToCalHP);
  }
});



// ### Backend calls 

// Sign Up Page - POST to backend

$(document).ready(function() {

  $('#signup-form').submit(function(event) {
      event.preventDefault(); // Verhindert Standardverhalten des Formulars

      // Erfasse die Formulardaten
      var formData = {
          firstName: $('#firstname-field').val(),
          lastName: $('#lastname-field').val(),
          eMail: $('#email-field').val(),  // username = email 
          userPassword: $('#password-field').val(),
          phoneNum: $('#phoneNum-field').val()
      };

      // POST to MappingController
      $.ajax({
          type: 'POST',
          url: 'https://dhbw-appointment-scheduler-ad7e04c77a13.herokuapp.com/api/v1.0/user/create', // URL of Heroku
          contentType: 'application/json',
          data: JSON.stringify(formData),
          success: function(response) {
              // Success-Handling 
              $('#message').text('Registrierung erfolgreich: ' + response.message);
              showPopup('Geschafft: Prüfe dein E-Mailpostfach');
          },
          error: function(error) {
              // Errorhandling
              $('#message').text('Fehler bei der Registrierung: ' + error.statusText);
              showPopup('Fehler: Registrierung fehlgeschlagen');
          }
      });
  });
});

/* Sign in page - POST to backend */ 
$(document).ready(function() {

  $('#login-form').submit(function(event) {
      event.preventDefault(); // Verhindert Standardverhalten des Formulars

      // Erfasse die Formulardaten
      var formData = {
          email: $('#email-field').val(),  // username = email 
          password: $('#password-field').val()
      };

      // POST to MappingController
      $.ajax({
          type: 'POST',
          url: 'https://dhbw-appointment-scheduler-ad7e04c77a13.herokuapp.com/api/v1.0/auth/login', // URL of Heroku
          contentType: 'application/json',
          data: JSON.stringify(formData),
          success: function(response) {
              // Success-Handling 
              $('#message').text('Anmeldung erfolgreich: ' + response.message);
              showPopup('Du bis jetzt eingeloggt');
          },
          error: function(error) {
              // Errorhandling
              $('#message').text('Fehler bei der Anmeldung: ' + error.statusText);
              showPopup('Fehler: Prüfe E-Mail und/oder Passwort');
          }
      });
  });
});

/* Password recovery */

/* Appointment create */

/* List all appointments for calendar */

/* List appointments for user */

/* List data for user profile */









// Popup für Event-Handling
function showPopup(message) {
  $('#popup-msg').text(message);
  $('#popup').fadeIn();

  // Automatisches Ausblenden nach 2 Sekunden
  setTimeout(function() {
    hidePopup();
  }, 2000); // 2000 Millisekunden entsprechen 2 Sekunden
}

// Ausblenden des Pop-ups
function hidePopup() {
  $('#popup').fadeOut();
}

// timeSelecter
document.addEventListener("DOMContentLoaded", function () {
  const openingHour = 10;
  const closingHour = 18;

  const hourDropdown = document.getElementById("hour");
  const minuteDropdown = document.getElementById("minute");

if (window.location.pathname =='/public/calendar/calendar.html') {

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
}
});



function getCalendarEvents(info, successCallback, failureCallback) {
  
  $.ajax({
  type: 'GET',
  url: 'https://dhbw-appointment-scheduler-ad7e04c77a13.herokuapp.com/api/v1.0/appointments/all?calendar',
  dataType: 'json',
  success: function(data) {
    var events = [];
    for (var i = 0; i < data.length; i++) {
      var appointment = data[i];

      var datetimeString = appointment.date + 'T' + appointment.time;
      var startDateTime = new Date(datetimeString);
      var durationParts = appointment.duration.split(':');
      var hours = parseInt(durationParts[0], 10);
      var minutes = parseInt(durationParts[1], 10);

      var endDateTime = new Date(startDateTime);
      endDateTime.setHours(startDateTime.getHours() + hours);
      endDateTime.setMinutes(startDateTime.getMinutes() + minutes);

      events.push({
        title: "Nicht verfügbar",
        start: startDateTime,
        end: endDateTime,
        status: "booked"
      });
    }

    successCallback(events);

    // Hier werden die Events zur Kalenderansicht hinzugefügt
    //calendar.addEventSource(events);

    // Kalender rendern nachdem die Daten geladen wurden
    //calendar.render();
  },
  error: function() {
    // Bei einem Fehler kannst du hier eine Fehlerbehandlung implementieren
    console.error('Fehler beim Abrufen der Daten');
  }
});
}


/* Appointment create */
$(document).ready(function() {

  $('#book-appointment').submit(function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars
    // Erfasse die Benutzereingaben
    var selectedService = parseInt($('input[name="hairstyle"]:checked').val());
    var selectedDate = $('#datePicker').val();
    var selectedHour = $('#hour').val();
    var selectedMinute = $('#minute').val();

    // Überprüfe, ob alle Felder ausgefüllt sind
    if (!selectedService || !selectedDate || !selectedHour || !selectedMinute) {
      showPopup('Bitte fülle alle Felder aus.');
      return;
    }

    // Erstelle ein JSON-Objekt mit den Benutzereingaben
    var appointmentData = {
      customerID: 0,
      serviceID: selectedService,
      date: selectedDate,
      time: selectedHour + ':' + selectedMinute
    };

      // POST to MappingController
      $.ajax({
          type: 'POST',
          url: 'https://dhbw-appointment-scheduler-ad7e04c77a13.herokuapp.com/api/v1.0/appointments/create', // URL of Heroku
          headers: {"Authorization": localStorage.getItem('token')},
          contentType: 'application/json',
          data: JSON.stringify(appointmentData),
          success: function(response) {
              // Success-Handling 
              showPopup('Termin gebucht - prüf dein Postfach');            
          },
          error: function(error) {
              // Errorhandling
              showPopup('Fehler: Termin nicht gebucht');
          }
      });
  });
});



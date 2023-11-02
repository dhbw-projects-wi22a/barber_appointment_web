function getCalendarEvents(info, successCallback, failureCallback) {
  
  $.ajax({
  type: 'GET',
  url: 'https://dhbw-appointment-scheduler-ad7e04c77a13.herokuapp.com/api/v1.0/appointments/all?calendar',
  dataType: 'json',
  success: function(data) {
    var events = [];
    console.log(data);
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
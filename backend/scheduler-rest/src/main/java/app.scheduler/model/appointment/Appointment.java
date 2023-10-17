package app.scheduler.model.appointment;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.sql.Time;
import java.util.*;

public class Appointment extends AppointmentList {

    private int appointmentID = 0;
    private Date date = new Date();
    private String time = "";
    private String duration = "";
    private boolean status = true;
    private int serviceID = 0;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<>();

    public Appointment() {

    }

    public Appointment(int AppointmentID, Date date, String time, String duration, boolean status, int serviceID) {
        this.appointmentID = AppointmentID;
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.status = status;
        this.serviceID = serviceID;
    }

    public int getAppointmentID() {
        return appointmentID;
    }

    public void setAppointmentID(int appointmentID) {
        this.appointmentID = appointmentID;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public int getServiceID() {
        return serviceID;
    }

    public void setServiceID(int serviceID) {
        this.serviceID = serviceID;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }
}


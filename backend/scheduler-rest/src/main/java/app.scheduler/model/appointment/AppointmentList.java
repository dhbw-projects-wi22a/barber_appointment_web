package app.scheduler.model.appointment;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AppointmentList {

    private Collection<Appointment> appointments;

    @JsonIgnore //API-First Prinzip
    private Map<String, Object> additionalProperties = new HashMap<>();

    public AppointmentList(List<AppointmentList> ShopAppointments) {

    }

    public AppointmentList(Collection<Appointment> appointments) {
        this.appointments = appointments;
    }

    public AppointmentList() {

    }

    public Collection<Appointment>getAppointments{
        return appointments;
    }
    public void setAppointments(Collection<Appointment> appointments) {
        this.appointments = appointments;
    }
    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }
    @JsonAnySetter
    public void setAdditionalProperties(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}


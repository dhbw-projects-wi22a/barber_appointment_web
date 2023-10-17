package app.scheduler.model.appointment;

import java.util.HashMap;
import java.util.Map;

public class TokenAppointment {

    private String token;
    private Appointment appointment;

    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<>();

    public TokenAppointment() { }

    public TokenAppointment(Appointment appointment, String token) {
        this.appointment = appointment;
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Appointment getAppointment() {
        return appointment;
    }

    public void setTask(Appointment appointment ) {
        this.appointment = appointment;
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

package app.scheduler.model.appointment;

import java.util.HashMap;
import java.util.Map;

public class TokenAppointmentID {

    private String token;
    private String id;

    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<>();

    public TokenAppointmentID() { }

    public TokenAppointmentID(String token, String id) {
        this.token = token;
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

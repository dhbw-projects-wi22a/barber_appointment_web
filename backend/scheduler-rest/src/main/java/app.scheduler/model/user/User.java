package app.scheduler.model.user;

import java.util.HashMap;
import java.util.Map;

public class User extends UserList {

    private String firstName;
    private String lastName;
    private String userPassword;
    private String eMail;
    private String phoneNum;
    private String token;

    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<>();

    public User() {
    }

    public User(String firstName, String lastName, String userPassword, String eMail, String phoneNum) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userPassword = userPassword;
        this.eMail = eMail;
        this.phoneNum = phoneNum;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperties(Map<String, Object> additionalProperties) {
        this.additionalProperties = additionalProperties;
    }
}

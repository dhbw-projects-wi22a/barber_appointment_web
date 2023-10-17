package app.scheduler.data.api;

public interface User {

    String getFirstName();
    String getLastName();
    String getPassword();
    String getEmail();

    String getToken();

    String phoneNum();
    long getValidUntil();
}

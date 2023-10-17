package com.mosbach.demo;

import com.mosbach.demo.data.api.TaskManager;
import com.mosbach.demo.data.api.UserManager;
import com.mosbach.demo.data.impl.*;
import com.mosbach.demo.model.alexa.AlexaRO;
import com.mosbach.demo.model.alexa.OutputSpeechRO;
import com.mosbach.demo.model.alexa.ResponseRO;
import com.mosbach.demo.model.auth.SendBackToken;
import com.mosbach.demo.model.student.Student;
import com.mosbach.demo.model.task.Task;
import com.mosbach.demo.model.task.TaskList;
import com.mosbach.demo.model.task.TokenTask;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1.0")
public class MappingController {

    // Turn on if you store data to postgres
    // UserManager userManager = PostgresDBUserManagerImpl.getPostgresDBUserManagerImpl();

    // Turn on if you store data to property files
    UserManager userManager = PropertyFileUserManagerImpl.getPropertyFileUserManagerImpl("src/main/resources/users.properties");
   //TaskManager taskManager = PropertyFileTaskManagerImpl.getPropertyFileTaskManagerImpl("src/main/resources/tasks.properties");

    TaskManager taskManager = PostgresDBTaskManagerImpl.getPostgresDBUserManagerImpl();

    /**
     * GET /auth only for testing whether the server is alive
     */
    @GetMapping("/auth")
    public String getInfo(@RequestParam(value = "name", defaultValue = "Student") String name) {
        Logger.getLogger("MappingController").log(Level.INFO,"MappingController auth " + name);
        return "ok";
    }

    @PostMapping(
            path = "/auth/login",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE}
    )
    @ResponseStatus(HttpStatus.OK)
    public SendBackToken signIn(@RequestBody Student student) {

        // Version 1: Send only Text
        // return new SendBackToken("12345", 12);

        // Version 2: Send JSON
        // final Logger mcLoguserin = Logger.getLogger("MC-UserLogin");
        // mcLoguserin.log(Level.INFO,"MappingController signin before " + student.getEmail());

        // User userSignedIn = userManager.logUserIn(student.getEmail(), student.getPassword());
        //mcLoguserin.log(Level.INFO,"MappingController userSignedIn " +
        //        userSignedIn.getEmail() + " " + userSignedIn.getToken() + " " + userSignedIn.getValidUntil());

        //return
        //        new SendBackToken(userSignedIn.getToken(), (int) userSignedIn.getValidUntil());

        return
                null;
    }

    /**
     * GET all tasks
     */
    @GetMapping("/tasks/all")
    public TaskList getAllTasks(
            @RequestParam(value = "token", defaultValue = "no-token") String token,
            @RequestParam(value = "sortOrder", defaultValue = "date") String sortOrder) {

        Logger.getLogger("MappingController").log(Level.INFO,"MappingController tasks/all " + sortOrder);

        // Step1: Check token

        // Step2: Fetch the tasks from the database
        List<com.mosbach.demo.data.api.Task> tasksFromFile =taskManager.readAllTasks();

        // Step3: Sort the tasks -> sortOrder

        List<Task> myTasks = new ArrayList<>();
        for(com.mosbach.demo.data.api.Task t : tasksFromFile) {
            myTasks.add(
                    new Task(t.getName(), t.getPriority()
                    )
            );
        }

        // Step4: produce json from tasks

        return new TaskList(myTasks);
    }

    /**
     * POST a new tasks
     */
    @PostMapping(
            path = "/task",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE}
    )
    public String addTask(@RequestBody TokenTask tokenTask) {
        Logger.getLogger("MappingController").log(Level.INFO,"MappingController /tasks ");
        // Step 1: Consume JSON


        // Step 2: Check token

        // Step 3: Add tasks to db
        Logger.getLogger("MappingController").
                log(Level.INFO,"Task.name &  priority" + tokenTask.getTask().getName() + tokenTask.getTask().getPriority());

        taskManager.addTask(tokenTask.getTask().getName(),tokenTask.getTask().getPriority());


        // Step 4:

        return "added following tasks:" + tokenTask.getTask().getName();
    }

    @PostMapping(
            path = "/alexa",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE}
    )
    public AlexaRO readTasks(@RequestBody AlexaRO alexaRO) {
        Logger.getLogger("MappingController").log(Level.INFO,"MappingController /alexa started ");

        String outText =    "";

        // if its a launchrequest ?

        if (alexaRO.getRequest().getType().equalsIgnoreCase("LaunchRequest"))
            outText += "Welcome to Mosbach Task Organizer.";

        // if its a ReadTaskIntent ?

        if
            (alexaRO.getRequest().getType().equalsIgnoreCase("IntentRequest")
            &&
            (alexaRO.getRequest().getType().equalsIgnoreCase("TaskReadIntent"))
            ) {
            List<com.mosbach.demo.data.api.Task> tasks = taskManager.readAllTasks();

            for (com.mosbach.demo.data.api.Task t : tasks) {
                outText += t.getName() + "with priority" + t.getPriority() + " . ";
            }
        }

        return prepareResponse(alexaRO,outText,true);
    }

    private AlexaRO prepareResponse(AlexaRO alexaRO, String outText, boolean shouldEndSession) {

        alexaRO.setRequest(null);
        alexaRO.setContext(null);
        alexaRO.setSession(null);
        OutputSpeechRO outputSpeechRO = new OutputSpeechRO();
        outputSpeechRO.setType("PlainText");
        outputSpeechRO.setText(outText);
        ResponseRO response = new ResponseRO(outputSpeechRO, shouldEndSession);
        alexaRO.setResponse(response);
        return alexaRO;
    }

    @GetMapping("/create-tasks-table")
    public String createTasksTable(@RequestParam(value = "token", defaultValue = "notoken") String token) {
        Logger.getLogger("MappingController").log(Level.INFO,"MappingController create table task " + token);

        //check token if it is really the super token for the database

        //create table for database

        taskManager.createTaskTable();

        return "ok";
    }

}



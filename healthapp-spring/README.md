# healthapp-spring

This app is created using Spring & Hibernate with database as MySQL. It is created for the sole purpose of demonstrating some of the following concepts:

 * Spring MVC concepts
 * REST API endpoints
 * Hibernate ORM concepts
 * Transaction management
 * Spring security (OAuth 2 based authentication and authorization)
 * Unit testing

In order to test the app, do following:

 * Install the MySQL database with username/password as root/root; In case, it is something else, change the username/password in startup.sh or startup.bat file
 * Execute the script, startup.sh or startup.bat to start the server; The server starts up by populating the database using schema.sql and data.sql in classpath. In case, you want to do differently, feel free to change code in AppConfig.java

Above would start the app at the port 8080. Goto browser and access URL such as **http://localhost:8080**

Login with one of the following users:

Doctor

 * Userid: aiyana@gmail.com
 * Password: book

Patient

 * Userid: anisha@gmail.com
 * Password: book 


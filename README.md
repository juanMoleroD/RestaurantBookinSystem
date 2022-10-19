# Restaurant Booking System

The application allows a user to make a booking for a customer, given a date, time and table number. The app uses React frontend for displaying and interacting with the data, and Java backend using a PostgreSQL database for storing the data.
The data is accesed by using RESTful routes to retrieve and manipulate the data from the database.

## How to use the application

To add a new booking from the Homepage, the user will need to select a date, time and filter to view the available tables, shown in green color. Then select a customer from the dropdown menu if it is a recurring customer or Add a new customer from the bottom form if it is a new customer. Once the customer is selected, hit the Add Booking button to add the booking to the system.
The user can view all bookings and customers going to the navigation menu at the top. From there a user can also delete and update both customers and bookings.


## How to Run the application Localy

Requirements: PostgreSQL database.

1. After cloning the repository, run "createdb restaurant".
2. Run "npm install" on the frontend and install Maven dependecies on the backend.
3. Start the backend by running the BackendApplication file located in src > main > java.
4. Start the front end running "npm start" in the frontend folder. 

## Important Notes:

To disable DataLoader in the back end you need to comment out the line with the @Component annotation.

To test the application, disable the PostgreSQL Dependency and uncomment the H2 dependency.


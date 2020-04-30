# employee-directory
An employee directory with React.

### Table of Contents
* General Info
* Deployed Link
* Technologies

### General Info
This application lets a user (employee or manager) view non-sensitive data about other employees. 
The user can filter employees by name, and sort the employee list by ID and/or name.
(A fake employee sample data is used to display on the app)

* Search by Employee's Name:

    As the user type in a search string, the app filters the employee list with the names that include the string as a part of their names.
    For exameple, typing "mo" in the search input, only the employees whose names include "mo" (for the sample data: "Charles Morris" and "Tracey Ramos") will be displayed.
    As the string in the search input changes, the displayed employee list changes.

* Sort the employee list by ID and/or name:

    Clicking on the table headr "ID", the employee lsit gets sorted in ascending/descending order.
    Clicking on the table header "Name", the employee list gets sorted in ascending/descending alphabetic order.

![Employee Directory](/public/assets/images/employeeDirectory.png)

### Deployed Link
[Click here to open the Employee Directory app](https://employee-directory-react-app.herokuapp.com/)

### Technologies
* JavaScript
* React JS
* Node Js
* Express
* axios
* react-bootstrap
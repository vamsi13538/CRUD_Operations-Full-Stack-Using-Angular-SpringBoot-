# CRUD Operations Web Application

## Overview

This is a full-stack web application built using Angular for the frontend, Spring Boot for the backend, and MySQL for database management. The application allows performing all CRUD (Create, Read, Update, Delete) operations on user data. It features a user-friendly interface with card views for individual user details and separate pages for editing and updating user information.

## Features

- **Home Page:** Displays a list of users with options to view details, edit, or delete a user.
- **View User Details:** Displays detailed information about a specific user in a card view.
- **Edit User:** Provides an interface to edit user information, which can be updated in the database.
- **Add User:** Allows adding a new user to the list.
- **Delete User:** Enables the deletion of a user from the database with confirmation.

## Technologies Used

- **Frontend:** Angular
- **Backend:** Spring Boot
- **Database:** MySQL
- **Build Tool:** Maven (for Spring Boot)
- **Styling:** CSS/Bootstrap

## Setup and Installation

### Prerequisites

- Node.js and npm installed
- Angular CLI installed
- JDK 8 or higher
- MySQL Server

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/vamsi13538/CRUD_Operations-Full-Stack-Using-Angular-SpringBoot-
    ```

2. Navigate to the frontend directory:
    ```bash
    cd crud-angular-springboot/frontend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the Angular development server:
    ```bash
    ng serve
    ```

5. Open your browser and navigate to `http://localhost:4200/` to see the application in action.

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd crud-angular-springboot/backend
    ```

2. Configure the MySQL database in `application.properties`:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
    spring.datasource.username=your_username
    spring.datasource.password=your_password
    ```

3. Build and run the Spring Boot application:
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

4. The backend will be running on `http://localhost:8080/`.

### Database Setup

1. Create a MySQL database:
    ```sql
    CREATE DATABASE your_database_name;
    ```

2. Use the `schema.sql` and `data.sql` files (if provided) to set up the necessary tables and initial data.

## Usage

- **Home Page:** Navigate to the home page to see a list of users.
- **Add User:** Click on the "Add User" button to add a new user.
- **Edit User:** Click on the "Edit" button next to a user to modify their details.
- **Delete User:** Click on the "Delete" button to remove a user from the list.
- **View User:** Click on the "View" button to see detailed information about the user.

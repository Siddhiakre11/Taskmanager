# Task Manager

A full-stack Task Manager application built using **Spring Boot, React.js, and MySQL**.

The application allows users to create, view, update, and delete tasks, with task details such as title, description, priority, status, deadline, and completion status.

## Tech Stack

### Backend

* Java 17
* Spring Boot
* Spring Data JPA
* Hibernate
* Maven
* MySQL

### Frontend

* React.js
* JavaScript
* React Scripts

## Project Structure

```text
Taskmanager/
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/taskmanager/
│       └── resources/
│           └── application.properties
│
├── task-manager-ui/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md
```

## Prerequisites

Make sure the following are installed:

* Java 17
* Node.js and npm
* MySQL
* Git

Check the installations:

```powershell
java -version
```

```powershell
node -v
```

```powershell
npm -v
```

```powershell
mysql --version
```

## Database Setup

Make sure the MySQL server is running.

Login to MySQL:

```powershell
mysql -u root -p
```

Create the database:

```sql
CREATE DATABASE task_manager;
```

Check the database:

```sql
SHOW DATABASES;
```

Exit MySQL:

```sql
exit;
```

## Backend Configuration

Open:

```text
src/main/resources/application.properties
```

Configure your MySQL connection:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/task_manager
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
```

If your project uses Hibernate to create/update tables automatically, make sure the following is configured:

```properties
spring.jpa.hibernate.ddl-auto=update
```

Replace `YOUR_MYSQL_PASSWORD` with your local MySQL password.

## Run the Backend

Open PowerShell in the project root:

```powershell
cd "C:\Users\SIDDHI\OneDrive\Desktop\Taskmanager"
```

Run Spring Boot:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend runs on:

```text
http://localhost:8081
```

Keep this terminal running.

## Run the Frontend

Open a **second PowerShell terminal**.

Go to the React application:

```powershell
cd "C:\Users\SIDDHI\OneDrive\Desktop\Taskmanager\task-manager-ui"
```

Install dependencies:

```powershell
npm install
```

Start the React application:

```powershell
npm start
```

The frontend runs on:

```text
http://localhost:3000
```

## Running the Complete Application

You need two terminals.

### Terminal 1 — Backend

```powershell
cd "C:\Users\SIDDHI\OneDrive\Desktop\Taskmanager"
.\mvnw.cmd spring-boot:run
```

### Terminal 2 — Frontend

```powershell
cd "C:\Users\SIDDHI\OneDrive\Desktop\Taskmanager\task-manager-ui"
npm start
```

Then open:

```text
http://localhost:3000
```

## Application Architecture

```text
             React Frontend
             localhost:3000
                    │
                    │ REST API
                    ▼
            Spring Boot Backend
             localhost:8081
                    │
                    │ JPA / Hibernate
                    ▼
                MySQL
             localhost:3306
                    │
                    ▼
             task_manager
                    │
                    ▼
                task table
```

## Task Features

The application supports:

* Create tasks
* View tasks
* Update tasks
* Delete tasks
* Set task priority
* Set task status
* Set deadlines
* Mark tasks as completed
* Manage task descriptions

## Build the Backend

To create a production build:

```powershell
.\mvnw.cmd clean package
```

## Build the Frontend

From the frontend directory:

```powershell
npm run build
```

The production files will be generated in:

```text
task-manager-ui/build/
```

## Useful Commands

### Backend

Start backend:

```powershell
.\mvnw.cmd spring-boot:run
```

Clean and build:

```powershell
.\mvnw.cmd clean package
```

### Frontend

Install dependencies:

```powershell
npm install
```

Start frontend:

```powershell
npm start
```

Create production build:

```powershell
npm run build
```

Run tests:

```powershell
npm test
```

## Troubleshooting

### MySQL connection error

Make sure MySQL is running and verify:

```powershell
Get-Service | Where-Object {$_.Name -like "*MySQL*"}
```

The MySQL service should show:

```text
Running
```

### Java is not recognized

Check:

```powershell
java -version
```

Make sure Java 17 is installed and `JAVA_HOME` is configured.

### Frontend says `Missing script: "dev"`

This project uses **Create React App**, so use:

```powershell
npm start
```

not:

```powershell
npm run dev
```

### Backend shows 404 at `localhost:8081`

The backend is an API server and may not have a webpage mapped to `/`.

Use:

```text
http://localhost:3000
```

for the React frontend.

## Author

**Siddhi Akre**

B.Tech Computer Engineering

GitHub: `https://github.com/Siddhiakre11`

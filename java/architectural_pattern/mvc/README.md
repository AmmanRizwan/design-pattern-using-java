## About the Project

<div>
    <h3 align="center">MVC (Model-View-Controller) Architectural Pattern</h3>
</div>

# Introduction

MVC is a most common architectural pattern in Software developement. It is mainly used for the small or medium scale development.

- *Remember this project is not vibe coded. Each line of code is written by the author.*

### Built With

* [![Spring Boot][Spring-badge]][Spring-url]
* [![Java][Java-badge]][Java-url]
* [![Maven][Maven-badge]][Maven-url]
* [![Docker][Docker-badge]][Docker-url]
* [![Mockito][Mockito-badge]][Mockito-url]
* [![JUnit5][JUnit5-badge]][JUnit5-url]
* [![PostgreSQL][Postgres-badge]][Postgres-url]
* [![H2 Database][H2-badge]][H2-url]

<!-- MARKDOWN LINK & IMAGES -->
[Spring-badge]: https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white
[Spring-url]: https://spring.io/projects/spring-boot
[Java-badge]: https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white
[Java-url]: https://www.oracle.com/java/
[Maven-badge]: https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white
[Maven-url]: https://maven.apache.org/
[Docker-badge]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[Mockito-badge]: https://img.shields.io/badge/Mockito-78A3AD?style=for-the-badge&logo=mockito&logoColor=white
[Mockito-url]: https://site.mockito.org/
[JUnit5-badge]: https://img.shields.io/badge/JUnit5-25A162?style=for-the-badge&logo=junit5&logoColor=white
[JUnit5-url]: https://junit.org/junit5/
[Postgres-badge]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/
[H2-badge]: https://img.shields.io/badge/H2%20Database-004B8D?style=for-the-badge&logo=databricks&logoColor=white
[H2-url]: http://www.h2database.com/

## Getting Started

Follow these steps to get **MVC** up and running on your local machine.

### 1. Prerequisites

Before you begin, make sure you have the following installed:

* **Java 17 or latest version**
* **Apache Maven 3.6.3**
* **PostgreSQL 13**
* **Docker**
* **Node.JS**
* **Yarn**

### 2. Installation

Step-by-Step instructions to prepare the environment:

1. Clone/Download the project:
    `git clone http://github.com/AmmanRizwan/{project name}`

2. Navigate to the directory frontend directory:
    `cd mvc/frontend`

3. Install dependencies:
    `yarn install`

4. Navigate to the backend directory:
    `cd mvc/backend`

5. Install dependencies:
    `mvn package`

### 3. Configuration

The Project requires specific settings:

* Copy the example environmnet file: `cp .env.example .env`
* Open `./env` and add your **Credentails**

### 4. Run the project

Fire it up with this command:

**Frontend**

`yarn dev`

**Backend**

`mvn spring-boot:run`

**Success!** You should now see the frontend running at `http://localhost:5713` and backend running at `http://localhost:8080`

**Common Examples**

* Build a maven project: `mvn clean package -Dskip-tests`
* Clean project: `mvn clean -Dskip-test`

* Build a yarn project: `yarn build`

## Technical Details

**Architecture Overview**

This project follow a **Monolithic** architecture. It is designed to be decoupled, meaning the Logic layer is independent of the UI Layer, allow for easy scaling and testing.

**Tech Stack**

* **Language**: TypeScript, Java, HTML, CSS
* **Framework**: Spring Boot, Spring Data JPA, React JS + TypeScript.
* **Database**: PostgreSQL / H2 Database
* **Infrastructure**: Docker

**API Endpoints***

* **Todo Endpoints**:
    * `POST`: `/v1/api/todo`
    * `GET`: `/v1/api/todo`
    * `GET`: `/v1/api/todo/{id}`
    * `PUT`: `/v1/api/todo/{id}`
    * `DELETE`: `/v1/api/todo/{id}`

**Maintenance & Performance**

* **Testing**: We use **Mockito** for unit testing. Run them using: `mvn test --D spring.profiles.active=test`

## Project Structure

```shell
.
├── backend
│   ├── mvnw
│   ├── mvnw.cmd
│   ├── pom.xml
│   └── src
│       ├── main
│       │   ├── java
│       │   │   └── archi
│       │   │       └── mvc
│       │   │           └── backend
│       │   │               ├── BackendApplication.java
│       │   │               ├── config
│       │   │               │   └── CorsConfig.java
│       │   │               ├── controller
│       │   │               │   └── TodoController.java
│       │   │               ├── dto
│       │   │               │   ├── TodoDto.java
│       │   │               │   └── TodoResponseDto.java
│       │   │               ├── handler
│       │   │               │   └── GlobalExceptionHandler.java
│       │   │               ├── mapper
│       │   │               │   └── TodoMapper.java
│       │   │               ├── models
│       │   │               │   └── Todo.java
│       │   │               ├── repository
│       │   │               │   └── TodoRepository.java
│       │   │               ├── response
│       │   │               │   └── ApiResponse.java
│       │   │               └── service
│       │   │                   ├── impl
│       │   │                   │   └── TodoServiceImpl.java
│       │   │                   └── TodoService.java
│       │   └── resources
│       │       └── application.yaml
│       └── test
│           └── java
│               └── archi
│                   └── mvc
│                       └── backend
│                           └── BackendApplicationTests.java
└── frontend
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── public
    │   ├── favicon.svg
    │   └── icons.svg
    ├── README.md
    ├── src
    │   ├── app
    │   │   └── pages
    │   │       └── todo
    │   │           ├── edit
    │   │           │   └── index.tsx
    │   │           └── index.tsx
    │   ├── App.tsx
    │   ├── assets
    │   │   ├── hero.png
    │   │   ├── react.svg
    │   │   └── vite.svg
    │   ├── main.tsx
    │   └── services
    │       ├── api.ts
    │       └── todo
    │           ├── index.ts
    │           └── interface.ts
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    └── yarn.lock

33 directories, 38 files
```

## Author

**Amman Rizwan**

Created: 

_Built with ❤️ using modern web technologies_
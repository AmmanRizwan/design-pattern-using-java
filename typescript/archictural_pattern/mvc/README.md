## About the Project

<div>
    <h3 align="center">MVC (Model-View-Controller) Architectural Pattern</h3>
</div>

# Introduction

MVC is a most common architectural pattern in Software developement. It is mainly used for the small or medium scale and sometime large scale development.

- *Remember this project is not vibe coded. Each line of code is written by the author.*

### Built With
* [![Docker][Docker-badge]][Docker-url]
* [![PostgreSQL][Postgres-badge]][Postgres-url]

<!-- MARKDOWN LINK & IMAGES -->
[Docker-badge]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[Postgres-badge]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/

## Getting Started

Follow these steps to get **MVC** up and running on your local machine.

### 1. Prerequisites

Before you begin, make sure you have the following installed:

* **NPM**
* **MongoDB**
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
    `npm install`

### 3. Configuration

The Project requires specific settings:

* Copy the example environmnet file: `cp .env.example .env`
* Open `./env` and add your **Credentails**

### 4. Run the project

Fire it up with this command:

**Frontend**

`yarn dev`

**Backend**

`npm run dev`

**Success!** You should now see the frontend running at `http://localhost:5713` and backend running at `http://localhost:8000`

**Common Examples**

* Build a npm project: `npm run build`
* Get a builded npm project: `npm start`

* Build a yarn project: `yarn build`

## Technical Details

**Architecture Overview**

This project follow a **Monolithic** architecture. It is designed to be decoupled, meaning the Logic layer is independent of the UI Layer, allow for easy scaling and testing.

**Tech Stack**

* **Language**: TypeScript, Java, HTML, CSS
* **Framework**: Express JS, Node.JS, Mongoose, JsonWebToken, React JS + TypeScript.
* **Database**: MongoDB
* **Infrastructure**: Docker

**API Endpoints***

* **Todo Endpoints**:
    * `POST`: `/v1/api/todo`
    * `GET`: `/v1/api/todo`
    * `GET`: `/v1/api/todo/{id}`
    * `PUT`: `/v1/api/todo/{id}`
    * `DELETE`: `/v1/api/todo/{id}`

**Maintenance & Performance**

* **Testing**: We use **Jest** for unit testing. Run them using: `npm run test`

## Project Structure

```shell
project directory will added soon...
```

## Author

**Amman Rizwan**

Created: 17 April 2026

_Built with ❤️ using modern web technologies_
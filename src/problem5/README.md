# CRUD ExpressJS + TypeScript Backend

This repository contains a simple CRUD backend built with ExpressJS and TypeScript. It demonstrates how to create, read, update, and delete resources in a PostgreSQL database using Docker and Docker Compose.

## Table of Contents
- [Overview](#overview)
- [System Architecture/Design](#system-architecturedesign)
- [Tech Stack](#tech-stack)
- [System Requirements](#system-requirements)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
  - [With Docker Compose](#with-docker-compose)
  - [Without Docker Compose](#without-docker-compose)
- [Endpoints](#endpoints)
- [Things to Improve](#things-to-improve)
- [License](#license)

---

## Overview

This project showcases:
1. **CRUD** operations for a single resource.
2. **Express.js** for handling HTTP requests.
3. **TypeScript** for a type-safe environment.
4. **Sequelize** as an ORM for PostgreSQL.
5. **Docker** and **Docker Compose** for containerization and easy deployment.

---

## System Architecture/Design

```
┌─────────────────────────┐
│        Client/App       │
│ (Sends HTTP requests)   │
└─────────────────────────┘
            ↓
┌─────────────────────────┐
│ Express.js Application  │
│   (app.ts / index.ts)   │
└─────────────────────────┘
            ↓
┌─────────────────────────┐
│       Routes Layer      │
│   (ResourcesRoute.ts)   │
└─────────────────────────┘
            ↓
┌─────────────────────────┐
│     Controllers Layer   │
│ (ResourceController.ts) │
└─────────────────────────┘
            ↓
┌─────────────────────────┐
│     Services Layer      │
│ (ResourceService.ts)    │
└─────────────────────────┘
            ↓
┌─────────────────────────┐
│   Repository Layer      │
│ (ResourceRepository.ts) │
└─────────────────────────┘
            ↓
┌─────────────────────────┐
│  Database Models Layer  │
│     (resource.ts)       │
└─────────────────────────┘
            ↓
┌─────────────────────────┐
│   PostgreSQL Database   │
└─────────────────────────┘
```

1. **Routes**: Define the endpoints for resource management.  
2. **Controllers**: Coordinate requests, responses, and handle error responses.  
3. **Services**: Encapsulate business logic and call the repository methods.  
4. **Repository**: Provide an abstraction to interact with the database.  
5. **Models**: Define the database schema using Sequelize.  

---

## Tech Stack

1. **Node.js (v20)** and **Express.js** for the server.
2. **TypeScript** for a type-safe development experience.
3. **PostgreSQL** as the relational database.
4. **Sequelize** ORM for database operations.
5. **Docker** and **Docker Compose** for containerization.
6. **Helmet** for basic security headers.
7. **Morgan** for logging (in development mode).

---

## System Requirements

1. **Docker** (20.x or newer recommended).
2. **Docker Compose** (v2.0 or newer).
3. **Node.js** (v18 or newer) — only needed if running without Docker Compose.
4. **npm** (v8 or newer) — only needed if running without Docker Compose.

---

## Configuration

You need a `.env` file in the root directory with the following environment variables (sample values shown):

```
# .env

NODE_ENV=development
PORT=3000

DB_HOST=db
DB_PORT=5432
DB_NAME=postgres
DB_USER=postgres
DB_PASS=password

CORS_URL=*
```

> **Note**: Docker Compose will pick up these environment variables when building and running containers. Modify them according to your environment or preferences.

---

## Running the Application

### With Docker Compose

1. **Clone this repository**:
   ```bash
   git clone https://github.com/Mohamad-Seyam/code-challenge.git
   cd src/problem5
   ```
2. **Create or edit the `.env` file** with valid credentials and ports.
3. **Build and start the containers**:
   ```bash
   docker-compose up --build
   ```
4. **Access the API**:
   - By default, the server will listen on `http://localhost:3000`.
   - The PostgreSQL database is mapped to your machine on the port specified by `DB_PORT` in your `.env` (e.g., `5432`).

> **Tip**: Use `docker-compose up -d` to run containers in detached mode.

### Without Docker Compose

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Build TypeScript**:
   ```bash
   npm run build
   ```
3. **Start the server**:
   ```bash
   npm run start
   ```
   Make sure you have a running PostgreSQL database and update your `.env` file with the correct connection details.

---

## Endpoints

The base URL is:  
```
http://localhost:<PORT>/api/v1
```

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/resources` | Get all resources |
| GET | `/api/v1/resources/:id` | Get a specific resource |
| POST | `/api/v1/resources` | Create a new resource |
| PUT | `/api/v1/resources/:id` | Update a resource |
| DELETE | `/api/v1/resources/:id` | Delete a resource |


1. **Create a resource**  
   `POST /resources`  
   Body JSON example:  
   ```json
   {
     "name": "My Resource",
     "description": "Description of my resource"
   }
   ```

2. **List resources**  
   `GET /resources`  
   Query parameters can be added for filtering, e.g. `GET /resources?name=My%20Resource`

3. **Get details of a resource**  
   `GET /resources/:id`  

4. **Update resource details**  
   `PUT /resources/:id`  
   Body JSON example:  
   ```json
   {
     "name": "Updated name",
     "description": "Updated description"
   }
   ```

5. **Delete a resource**  
   `DELETE /resources/:id`  

---

## Things to Improve

1. **Validation**  
   - Add request body validation (e.g. using [Joi](https://www.npmjs.com/package/joi), [Yup](https://www.npmjs.com/package/yup), or a TypeScript-specific library).
   - Validate query parameters to ensure type correctness and expected value ranges.

2. **Error Handling**  
   - Introduce a global error-handling middleware to handle different types of errors consistently (e.g., database errors, validation errors, etc.).
   - More granular error messages and error codes.

3. **Testing**  
   - Add unit tests for Controllers, Services, and Repositories.
   - Add integration tests to verify the API endpoints.

4. **Authentication & Authorization**  
   - Implement user authentication (e.g., JWT-based) and limit resource access based on user roles or ownership if required.

5. **Advanced Filters & Pagination**  
   - Expand list endpoints to support pagination and more advanced filtering, such as partial matches, date ranges, or sorting.

6. **API Documentation**  
   - Use tools like [Swagger](https://swagger.io/) or [Postman](https://www.postman.com/) collections to document and test the API more thoroughly.

---

## License

[MIT](LICENSE) © 2025 Mohamed Seyam
# Pet Adoption Platform

![Pet Adoption Platform](assets/home.png)

Full stack application developed as a portfolio project to practice the development of a complete web system, including frontend development, REST API creation, authentication, image upload and deployment.

The project consists of a platform where users can register pets available for adoption, manage their own pet listings and organize adoption information.

## Features

* User registration and login with JWT authentication
* Password encryption using bcrypt
* Pet registration, listing, editing and deletion (CRUD)
* Authorization system to allow users to manage only their own pets
* Search pets by name
* Filter pets by species and adoption status
* Pet image upload and update using Cloudinary
* Adoption status management
* Responsive interface for desktop and mobile
* Loading states and feedback messages for user actions
* MongoDB Atlas database integration
* Data validation with Mongoose
* Centralized API error handling
* Automated backend tests with Jest and Supertest
* Docker support for running frontend and backend containers
* Continuous Integration workflow with GitHub Actions

## Technologies

### Front-end

* React
* Vite
* JavaScript
* CSS

### Back-end

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* JWT
* bcrypt
* Multer
* Cloudinary
* Dotenv

### Testing and DevOps

* Jest
* Supertest
* Docker
* Docker Compose
* GitHub Actions

## Project Architecture

The project follows a modular structure separating responsibilities between routes, controllers, models and services.

The backend is responsible for authentication, business rules, database communication and API endpoints.

The frontend consumes the REST API and handles user interaction, navigation and data presentation.

## Deploy

Frontend:

https://pet-adoption-platform-nine.vercel.app

Backend API:

https://pet-adoption-platform-tz77.onrender.com

> **Note:** The backend is hosted on Render's free tier. When inactive, the first request may take a few seconds while the service starts.

## Environment Variables

Create a `.env` file in the backend folder based on your environment.

Example:

```env
MONGODB_URI=<mongodb_connection_string>
PORT=3000
JWT_SECRET=<jwt_secret>

CLOUDINARY_CLOUD_NAME=<cloudinary_name>
CLOUDINARY_API_KEY=<cloudinary_key>
CLOUDINARY_API_SECRET=<cloudinary_secret>
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

## Running the Project Locally

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend:

```bash
cd frontend
npm run dev
```

The application will run at:

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:3000
```

## Running with Docker

The project can also be executed using Docker Compose.

Build and start the containers:

```bash
docker compose up --build
```

Access:

Frontend:

```text
http://localhost:8080
```

Backend:

```text
http://localhost:3000
```

## Running Tests

Run backend tests:

```bash
cd backend
npm test
```

Generate coverage report:

```bash
npm test -- --coverage
```

## Project Structure

```text
pet-adoption-platform
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── models
│   │   ├── middlewares
│   │   └── config
│   │
│   └── tests
│
└── frontend
    └── src
        ├── components
        ├── pages
        ├── services
        └── assets
```

## Future Improvements

Some improvements planned for future versions:

* Improve interface and user experience
* Add adoption request workflow
* Add user profile management
* Add additional monitoring and logging features

---

Developed as part of my journey transitioning into software development.

```
```
    
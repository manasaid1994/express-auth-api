# Express Auth API (TypeScript)

A simple and secure **user authentication API** built with **Express**, **TypeScript**, **MongoDB**, and **JWT**.
This project demonstrates professional backend practices including:

* User registration and login
* JWT-based authentication
* Protected routes
* TypeScript type safety
* Clean architecture (controllers, services, middleware)
* Password hashing with bcrypt

---

## Features

* **Register:** Create a new user account
* **Login:** Authenticate and receive a JWT
* **Get Current User:** Retrieve the logged-in user’s information using a token
* **Secure Password Storage:** Passwords hashed with bcrypt
* **TypeScript Support:** Fully typed backend code

---

## Tech Stack

* Node.js + Express
* TypeScript
* MongoDB (Mongoose)
* JWT (jsonwebtoken)
* bcryptjs for password hashing
* Playwright for automated backend/UI tests (optional)

---

## Getting Started

### Prerequisites

* Node.js v18+
* MongoDB (local or MongoDB Atlas)
* npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/manasaid1994/express-auth-api.git
cd express-auth-api
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory based on `.env.example`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/express-auth
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1h
```

> **Tip:** Use a MongoDB Atlas URI if you don’t want to run Mongo locally.

4. Start the server:

```bash
npx ts-node-dev src/server.ts
```

Server should run at:

```
http://localhost:5000
```

---

## API Endpoints

### **Register User**

```
POST /api/auth/register
```

**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "_id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "jwt-token-here"
}
```

---

### **Login User**

```
POST /api/auth/login
```

**Body:**

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "_id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "jwt-token-here"
}
```

---

### **Get Current User (Protected)**

```
GET /api/auth/me
```

**Headers:**

```
Authorization: Bearer <token>
```

**Response:**

```json
{
  "_id": "...",
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

## Project Structure

```
src/
├─ config/       # Environment variables and config
├─ controllers/  # Route controllers
├─ middlewares/  # Auth middleware
├─ model/        # Mongoose models
├─ routes/       # API routes
├─ services/     # Business logic
├─ utils/        # Helper functions
├─ app.ts        # Express app setup
└─ server.ts     # Server + DB connection
```

---

## Notes

* JWT tokens expire after 1 hour (`JWT_EXPIRES_IN`)
* Passwords are hashed with bcrypt
* Use the `/me` endpoint to test protected routes

---

## Future Improvements

* Add role-based access control
* Add refresh token functionality
* Add automated Playwright API/UI tests
* Add Swagger documentation for API

---

## License

This project is **MIT licensed**.

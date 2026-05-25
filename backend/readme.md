# User Management Backend API

## Overview

This is the backend service for the User Management System built using Node.js, Express.js, MongoDB, and JWT Authentication.

The backend handles:

- User Authentication
- Authorization
- User CRUD Operations
- Protected Routes
- Database Management
- API Request Handling

---

# Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| dotenv | Environment Variables |

---

# Project Structure

backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── userController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── models/
│   └── User.js
│
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
│
├── utils/
│
├── .env
├── server.js
├── package.json
└── README.md

---

# Features

## Authentication Features

- User Registration
- User Login
- JWT Token Authentication
- Password Hashing
- Protected Routes

---

## User Management Features

- Get All Users
- Get Single User
- Update User
- Delete User

---

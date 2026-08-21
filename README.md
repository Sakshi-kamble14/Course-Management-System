# Course Management System Backend

This repository contains the backend for a MERN-style Course Management System built with Node.js, Express.js, MySQL, JWT, and bcrypt.

## Backend folder

- Server/
  - Express API
  - MySQL connection via mysql2/promise
  - JWT authentication and bcrypt password hashing
  - MVC structure with config/controllers/middleware/routes/services/validators/utils

## Database setup

Import the schema from Database/merndb.sql into MySQL. The database name is mern_db.

## Environment variables

Copy Server/.env.example to Server/.env and update your local MySQL and JWT settings.

## Run locally

```bash
cd Server
npm install
npm run dev
```

## Main API endpoints

- POST /auth/login
- GET /course/all-active-courses
- GET /course/all-courses
- POST /course/add
- PUT /course/update/:courseId
- DELETE /course/delete/:courseId
- GET /video/all-videos
- POST /video/add
- PUT /video/update/:videoId
- DELETE /video/delete/:videoId
- GET /admin/enrolled-students
- POST /student/register-to-course
- PUT /student/change-password
- GET /student/my-courses
- GET /student/my-course-with-videos

## Roles

- admin: manages courses, videos, and views enrolled students
- student: registers for courses, updates password, and accesses their own course data

# 🎓 Course Management System

A full-stack **Course Management System** built using **React.js, Vite, Node.js, Express.js, and MySQL**.

The system provides separate dashboards for **Administrators and Students**, allowing administrators to manage courses, videos, and enrollments while students can browse courses, enroll, and access course videos.

---

## 🚀 Features

### 👨‍💼 Admin

* Secure admin login
* Admin dashboard
* View total courses
* View active courses
* View total students
* View total enrollments
* Add courses
* Edit courses
* Delete courses
* Add course videos
* Edit videos
* Delete videos
* View enrolled students
* Filter students by course
* Search courses and students
* Responsive admin dashboard

### 👨‍🎓 Student

* Secure student login
* Student dashboard
* View available courses
* View course details
* Enroll in courses
* View enrolled courses
* Access course videos
* YouTube video player
* Course-based learning interface
* Change password
* Responsive student dashboard

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* React Router DOM
* Axios
* Bootstrap 5
* React Icons
* CSS

### Backend

* Node.js
* Express.js
* REST API
* JWT Authentication

### Database

* MySQL

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Postman
* npm

---

## 📁 Project Structure

```text
Course-Management-System/
│
├── Client/
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── AdminLayout.jsx
│   │   │   │   ├── AdminSidebar.jsx
│   │   │   │   ├── AdminNavbar.jsx
│   │   │   │   ├── DashboardStats.jsx
│   │   │   │   ├── RecentCourses.jsx
│   │   │   │   ├── RecentEnrollments.jsx
│   │   │   │   └── QuickActions.jsx
│   │   │   │
│   │   │   ├── student/
│   │   │   │   ├── StudentDashboard.jsx
│   │   │   │   ├── StudentLayout.jsx
│   │   │   │   ├── StudentSidebar.jsx
│   │   │   │   ├── StudentNavbar.jsx
│   │   │   │   ├── CourseCard.jsx
│   │   │   │   ├── VideoPlayer.jsx
│   │   │   │   └── VideoList.jsx
│   │   │   │
│   │   │   ├── courses/
│   │   │   │   ├── CourseCard.jsx
│   │   │   │   ├── CourseForm.jsx
│   │   │   │   └── CourseTable.jsx
│   │   │   │
│   │   │   └── common/
│   │   │       ├── Loader.jsx
│   │   │       ├── EmptyState.jsx
│   │   │       ├── ErrorMessage.jsx
│   │   │       ├── ConfirmModal.jsx
│   │   │       ├── PageHeader.jsx
│   │   │       ├── SearchInput.jsx
│   │   │       └── StatusBadge.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Courses.jsx
│   │   │   │
│   │   │   ├── admin/
│   │   │   │   ├── AdminCourses.jsx
│   │   │   │   ├── AdminVideos.jsx
│   │   │   │   └── EnrolledStudents.jsx
│   │   │   │
│   │   │   └── student/
│   │   │       ├── AvailableCourses.jsx
│   │   │       ├── MyCourses.jsx
│   │   │       ├── MyLearning.jsx
│   │   │       ├── VideoLearning.jsx
│   │   │       └── ChangePassword.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── courseService.js
│   │   │   ├── videoService.js
│   │   │   └── studentService.js
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── routes/
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── AdminRoute.jsx
│   │   │   └── StudentRoute.jsx
│   │   │
│   │   ├── utils/
│   │   │   ├── formatDate.js
│   │   │   └── youtube.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── Server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# 🔐 Authentication

The application uses **JWT-based authentication**.

After successful login, the frontend stores:

```text
token
user
```

in `localStorage`.

The Axios interceptor automatically sends:

```text
Authorization: Bearer <JWT_TOKEN>
```

with protected API requests.

### User Roles

The system supports two roles:

```text
ADMIN
STUDENT
```

Users are automatically redirected according to their role.

```text
Admin   → /admin/dashboard
Student → /student/dashboard
```

---

# 📌 Application Routes

## Public Routes

| Route      | Description       |
| ---------- | ----------------- |
| `/`        | Home page         |
| `/courses` | Available courses |
| `/login`   | Login page        |

## Admin Routes

| Route              | Description            |
| ------------------ | ---------------------- |
| `/admin/dashboard` | Admin dashboard        |
| `/admin/courses`   | Manage courses         |
| `/admin/videos`    | Manage videos          |
| `/admin/students`  | View enrolled students |

## Student Routes

| Route                      | Description        |
| -------------------------- | ------------------ |
| `/student/dashboard`       | Student dashboard  |
| `/student/courses`         | Available courses  |
| `/student/my-courses`      | Enrolled courses   |
| `/student/learning`        | Learning dashboard |
| `/student/change-password` | Change password    |

---

# 🔗 Backend API

The frontend communicates with the existing Express backend.

Default backend URL:

```text
http://localhost:5000
```

Create a `.env` file inside the `Client` folder:

```env
VITE_API_URL=http://localhost:5000
```

---

# 📡 API Endpoints

## Authentication

```http
POST /auth/login
```

---

## Courses

```http
GET    /course/all-active-courses
GET    /course/all-courses
POST   /course/add
PUT    /course/update/:courseId
DELETE /course/delete/:courseId
```

---

## Videos

```http
GET    /video/all-videos
POST   /video/add
PUT    /video/update/:videoId
DELETE /video/delete/:videoId
```

---

## Admin

```http
GET /admin/enrolled-students
GET /admin/enrolled-students?courseId=:courseId
```

---

## Student

```http
POST /student/register-to-course
GET  /student/my-courses
GET  /student/my-course-with-videos
PUT  /student/change-password
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

Navigate into the project:

```bash
cd Course-Management-System
```

---

# 🖥️ Frontend Setup

Navigate to the Client folder:

```bash
cd Client
```

Install dependencies:

```bash
npm install
```

Create `.env`:

```env
VITE_API_URL=http://localhost:5000
```

Start the development server:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

---

# 🖥️ Backend Setup

Open another terminal.

Navigate to the Server folder:

```bash
cd Server
```

Install dependencies:

```bash
npm install
```

Create your backend `.env` file with your MySQL/database configuration.

Example:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
JWT_SECRET=your_secret_key
```

Start the backend:

```bash
node server.js
```

For development with nodemon:

```bash
npm run dev
```

---

# 🗄️ Database

The application uses **MySQL**.

The database contains information related to:

* Users
* Courses
* Videos
* Student enrollments

Make sure MySQL is running before starting the backend.

Import the provided SQL/database schema before using the application.

---

# 👤 Demo Login Credentials

### Admin

```text
Email: admin@mern.com
Password: admin123
```

### Student

```text
Email: student1@gmail.com
Password: stud123
```

Additional test students may be available depending on the database seed data.

> These credentials are intended for local development/testing only.

---

# 📊 Admin Dashboard

The Admin Dashboard provides:

* Course statistics
* Student statistics
* Enrollment statistics
* Active course statistics
* Recent courses
* Recent enrollments
* Quick actions

The dashboard is component-based.

```text
AdminDashboard
│
├── AdminLayout
│   ├── AdminSidebar
│   └── AdminNavbar
│
├── DashboardStats
├── RecentCourses
├── RecentEnrollments
└── QuickActions
```

This architecture keeps the frontend maintainable and reusable.

---

# 🎓 Student Learning

Students can:

1. Login
2. Browse active courses
3. Enroll in a course
4. View enrolled courses
5. Open their learning dashboard
6. Select course videos
7. Watch YouTube-based course content
8. Change their password

The backend controls which videos are available to the student.

---

# 🔒 Security

The application implements:

* JWT authentication
* Role-based authorization
* Protected routes
* Admin route protection
* Student route protection
* Axios authentication interceptor
* Password validation
* No password storage in localStorage
* Automatic logout on unauthorized requests

---

# 📱 Responsive Design

The application is designed to work across:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

The admin sidebar automatically adapts to smaller screen sizes.

Tables support horizontal scrolling on mobile devices.

---

# 🧩 Component-Based Architecture

The frontend follows a reusable component architecture:

```text
Pages
  ↓
Layouts
  ↓
Reusable Components
  ↓
Services
  ↓
REST APIs
  ↓
Express Backend
  ↓
MySQL Database
```

This makes the project:

* Easier to maintain
* Easier to test
* Easier to scale
* More reusable
* More professional

---

# 🧪 Testing

You can test the backend APIs using **Postman**.

Test the following flow:

```text
1. Login
2. Copy JWT token
3. Add Authorization header
4. Create course
5. Create video
6. Enroll student
7. Get enrolled students
8. Get student courses
9. Get course videos
```

Frontend testing:

```bash
npm run dev
```

Then test:

```text
Login
Admin Dashboard
Course Management
Video Management
Student Enrollment
My Courses
Learning Videos
Logout
```

---

# 🛠️ Useful Commands

### Frontend

Install packages:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build production application:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# 🌐 Production Build

Create a production build:

```bash
npm run build
```

The generated production files will be available inside:

```text
dist/
```

Before deploying, update:

```env
VITE_API_URL=<production-backend-url>
```

---

# 📈 Future Enhancements

Possible future improvements:

* Course progress tracking
* Course completion certificates
* Student profile management
* Admin profile management
* Course categories
* Course search and advanced filters
* Pagination
* Email notifications
* Forgot password
* Dashboard charts
* Video watch history
* Assignment management
* Online quizzes
* Payment integration
* Cloud deployment

---

# 👩‍💻 Author

**Sakshi Kamble**

B.Tech Computer Science & Engineering

DKTE Society's Textile and Engineering Institute

---

# ⭐ Project Highlights

This project demonstrates practical knowledge of:

* React.js
* Vite
* Component-based architecture
* REST API integration
* Axios
* JWT Authentication
* Role-based authorization
* Node.js
* Express.js
* MySQL
* CRUD operations
* React Router
* Responsive UI
* API error handling
* Reusable components
* Full-stack application development

---

## 📄 License

This project is developed for educational and portfolio purposes.

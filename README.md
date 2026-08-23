# 🎓 Course Management System

A full-stack **Course Management System** built using **React.js, Vite, Node.js, Express.js, and MySQL**.

The system provides separate dashboards for **Administrators and Students**, allowing administrators to manage courses, videos, students, and enrollments while students can register, browse courses without enrolling, enroll in courses, access course videos, and get assistance from an **AI Course Assistant Chatbot**.

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
* Manage course availability
* Responsive admin dashboard

### 👨‍🎓 Student

* Student registration
* Secure student login
* Student dashboard
* Browse available courses without enrollment
* View course details
* Enroll in courses
* View enrolled courses
* Access course videos
* YouTube video player
* Course-based learning interface
* Change password
* Responsive student dashboard

### 🤖 AI Course Assistant

* AI-powered course chatbot
* Ask course-related questions
* Course recommendations
* Learning path suggestions
* Course prerequisite guidance
* Explain course concepts in simple language
* Suggest courses based on student interests
* Secure backend AI API integration

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

### AI

* AI Course Assistant
* Secure backend AI API integration

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
│   │   ├── assets/
│   │
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
│   │   │   │   ├── VideoList.jsx
│   │   │   │   └── CourseChatbot.jsx
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
│   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── StudentRegister.jsx
│   │   │   ├── Courses.jsx
│   │   │
│   │   │   ├── admin/
│   │   │   │   ├── AdminCourses.jsx
│   │   │   │   ├── AdminVideos.jsx
│   │   │   │   └── EnrolledStudents.jsx
│   │   │
│   │   │   └── student/
│   │   │       ├── StudentDashboard.jsx
│   │   │       ├── AvailableCourses.jsx
│   │   │       ├── CourseDetails.jsx
│   │   │       ├── MyCourses.jsx
│   │   │       ├── MyLearning.jsx
│   │   │       ├── VideoLearning.jsx
│   │   │       └── ChangePassword.jsx
│   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── courseService.js
│   │   │   ├── videoService.js
│   │   │   ├── studentService.js
│   │   │   └── aiService.js
│   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │
│   │   ├── routes/
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── AdminRoute.jsx
│   │   │   └── StudentRoute.jsx
│   │
│   │   ├── utils/
│   │   │   ├── formatDate.js
│   │   │   └── youtube.js
│   │
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
role
```

in `localStorage`.

The Axios interceptor automatically sends:

```text
Authorization: Bearer <JWT_TOKEN>
```

with protected API requests.

### User Roles

The system supports:

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

| Route               | Description          |
| ------------------- | -------------------- |
| `/`                 | Home page            |
| `/courses`          | Available courses    |
| `/login`            | Login page           |
| `/student/register` | Student registration |

## Admin Routes

| Route              | Description            |
| ------------------ | ---------------------- |
| `/admin/dashboard` | Admin dashboard        |
| `/admin/courses`   | Manage courses         |
| `/admin/videos`    | Manage videos          |
| `/admin/students`  | View enrolled students |

## Student Routes

| Route                      | Description              |
| -------------------------- | ------------------------ |
| `/student/dashboard`       | Student dashboard        |
| `/student/courses`         | Browse available courses |
| `/student/course/:id`      | View course details      |
| `/student/my-courses`      | Enrolled courses         |
| `/student/learning`        | Learning dashboard       |
| `/student/change-password` | Change password          |

---

# 🤖 AI Course Assistant

Students can access the AI chatbot from the student dashboard and course pages.

Example questions:

```text
Which course should I learn first?

What are the prerequisites for React?

What should I learn after JavaScript?

Which course is best for becoming a Full Stack Developer?

Explain this course in simple words.
```

The chatbot can provide:

* Course recommendations
* Learning guidance
* Prerequisite information
* Course explanations
* Learning path suggestions

The AI API key must remain on the **backend** and must never be exposed in the React frontend.

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

## Courses

```http
GET    /course/all-active-courses
GET    /course/all-courses
POST   /course/add
PUT    /course/update/:courseId
DELETE /course/delete/:courseId
```

## Videos

```http
GET    /video/all-videos
POST   /video/add
PUT    /video/update/:videoId
DELETE /video/delete/:videoId
```

## Admin

```http
GET /admin/enrolled-students
GET /admin/enrolled-students?courseId=:courseId
```

## Student

```http
POST /student/register-to-course
GET  /student/my-courses
GET  /student/my-course-with-videos
PUT  /student/change-password
```

## AI Assistant

```http
POST /ai/chat
```

> The exact AI endpoint should match the endpoint implemented in the backend.

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

Open a terminal.

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

Open a **second terminal**.

Navigate to the Server folder:

```bash
cd Server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=course_management

JWT_SECRET=your_jwt_secret

AI_API_KEY=your_ai_api_key
```

Start the backend:

```bash
node server.js
```

If the project has a development script:

```bash
npm run dev
```

The backend will normally run at:

```text
http://localhost:5000
```

---

# 🚀 Quick Start

You need **two terminals**.

### Terminal 1 — Backend

```bash
cd Server
npm install
node server.js
```

### Terminal 2 — Frontend

```bash
cd Client
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

---

# 🗄️ Database

The application uses **MySQL**.

Make sure MySQL is running before starting the backend.

Create the required database:

```sql
CREATE DATABASE course_management;
```

Import the provided SQL/schema file if available.

Update the backend `.env` according to your MySQL configuration:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=course_management
```

---

# 👤 Student Registration Flow

A student does not need to enroll immediately after creating an account.

The flow is:

```text
Student Registration
        ↓
Student Login
        ↓
Browse Available Courses
        ↓
View Course Details
        ↓
Use AI Course Assistant
        ↓
Choose Course
        ↓
Enroll
        ↓
Access Course Videos
```

Registration and enrollment are treated as separate actions.

---

# 🔒 Security

The application implements:

* JWT authentication
* Protected routes
* Role-based authorization
* Admin route protection
* Student route protection
* Axios authentication interceptor
* Password validation
* Secure backend AI API integration
* No password storage in localStorage
* Automatic logout on unauthorized requests

Never commit `.env` files to GitHub.

Add the following to `.gitignore`:

```gitignore
node_modules/
.env
.env.local
dist/
```

---

# 📱 Responsive Design

The application is designed to work across:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

The dashboards, navigation, cards, forms, tables, course pages, and chatbot are responsive.

---

# 🧩 Component-Based Architecture

The frontend follows a reusable architecture:

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

The AI chatbot follows:

```text
Student
   ↓
React Chatbot
   ↓
AI Service
   ↓
Express API
   ↓
AI Provider
   ↓
Response
   ↓
React Chatbot
```

This makes the application easier to maintain, test, and scale.

---

# 🧪 Testing

You can test backend APIs using **Postman**.

Recommended flow:

```text
1. Login
2. Copy JWT token
3. Add Authorization header
4. Create course
5. Create video
6. Register student
7. Browse courses
8. Enroll student
9. Get enrolled students
10. Get student courses
11. Get course videos
12. Test AI chatbot
```

Frontend testing:

```bash
npm run dev
```

Then test:

```text
Student Registration
Login
Browse Courses
Course Details
AI Chatbot
Enrollment
My Courses
Learning Videos
Admin Dashboard
Course Management
Video Management
Student Management
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

### Backend

Install packages:

```bash
npm install
```

Start server:

```bash
node server.js
```

Development mode:

```bash
npm run dev
```

---

# 🌐 Production Build

Create a production frontend build:

```bash
npm run build
```

The generated files will be available inside:

```text
dist/
```

Before deployment, update:

```env
VITE_API_URL=<production-backend-url>
```

Also configure the production backend environment variables and database connection.

---

# 📈 Future Enhancements

Possible future improvements:

* Course progress tracking
* Course completion certificates
* AI-generated quizzes
* AI-generated course summaries
* Student profile management
* Course categories
* Advanced course search
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
* AI API integration
* Full-stack application development

---

## 📄 License

This project is developed for educational and portfolio purposes.

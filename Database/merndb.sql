-- =====================================================
-- MERN COURSE MANAGEMENT SYSTEM
-- FINAL DATABASE
-- =====================================================

DROP DATABASE IF EXISTS mern_db;

CREATE DATABASE mern_db;

USE mern_db;


-- =====================================================
-- 1. USERS
-- Used for login and role management
-- =====================================================

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'student') NOT NULL
);


-- =====================================================
-- 2. COURSES
-- Admin can add, update, delete and filter courses
-- =====================================================

CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,

    course_name VARCHAR(100) NOT NULL,

    description TEXT,

    fees INT NOT NULL,

    start_date DATE NOT NULL,

    end_date DATE NOT NULL,

    video_expire_days INT NOT NULL DEFAULT 180,

    CHECK (fees >= 0),

    CHECK (end_date >= start_date),

    CHECK (video_expire_days > 0)
);


-- =====================================================
-- 3. STUDENTS
-- Student profile information
-- =====================================================

CREATE TABLE students (
    reg_no INT PRIMARY KEY AUTO_INCREMENT,

    user_id INT UNIQUE NOT NULL,

    name VARCHAR(100) NOT NULL,

    mobile_no VARCHAR(10) NOT NULL,

    profile_pic VARCHAR(255),

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CHECK (CHAR_LENGTH(mobile_no) = 10)
);


-- =====================================================
-- 4. ENROLLMENTS
-- Student can register for multiple courses
-- =====================================================

CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,

    reg_no INT NOT NULL,

    course_id INT NOT NULL,

    enrolled_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    status ENUM(
        'active',
        'completed',
        'cancelled'
    ) DEFAULT 'active',

    FOREIGN KEY (reg_no)
        REFERENCES students(reg_no)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (course_id)
        REFERENCES courses(course_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    UNIQUE (reg_no, course_id)
);


-- =====================================================
-- 5. VIDEOS
-- Videos belong to a particular course
-- =====================================================

CREATE TABLE videos (
    video_id INT PRIMARY KEY AUTO_INCREMENT,

    course_id INT NOT NULL,

    title VARCHAR(150) NOT NULL,

    description TEXT,

    youtube_url VARCHAR(255) NOT NULL,

    added_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (course_id)
        REFERENCES courses(course_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);


-- =====================================================
-- SAMPLE USERS
-- =====================================================

INSERT INTO users
(email, password, role)
VALUES
('admin@mern.com', '$2b$10$42qW.Q/7L1im7BDfjhI/meSphhaHm7BVtVArs6eBjyBEp9c8vUuE2', 'admin'),
('student1@gmail.com', '$2b$10$Ra7/G5Mmsi5bLB7AcAhJLuf6mBJ4rTiQgBn9rTdhZOYcQ3s6Rpz4G', 'student'),
('student2@gmail.com', '$2b$10$Ra7/G5Mmsi5bLB7AcAhJLuf6mBJ4rTiQgBn9rTdhZOYcQ3s6Rpz4G', 'student'),
('student3@gmail.com', '$2b$10$Ra7/G5Mmsi5bLB7AcAhJLuf6mBJ4rTiQgBn9rTdhZOYcQ3s6Rpz4G', 'student');


-- =====================================================
-- SAMPLE COURSES
-- =====================================================

INSERT INTO courses
(course_name, description, fees, start_date, end_date, video_expire_days)
VALUES

(
    'MERN Stack',
    'Full Stack Web Development with MERN',
    25000,
    '2025-01-10',
    '2025-06-10',
    180
),

(
    'Python Full Stack',
    'Python, Django & React',
    22000,
    '2025-02-01',
    '2025-07-01',
    180
),

(
    'Java Full Stack',
    'Java, Spring Boot & Angular',
    24000,
    '2025-03-01',
    '2025-08-01',
    180
);


-- =====================================================
-- SAMPLE STUDENTS
-- =====================================================

INSERT INTO students
(user_id, name, mobile_no, profile_pic)
VALUES

(
    2,
    'Rahul Sharma',
    '9876543210',
    NULL
),

(
    3,
    'Anita Verma',
    '9876543222',
    NULL
),

(
    4,
    'Amit Kumar',
    '9876543333',
    NULL
);


-- =====================================================
-- SAMPLE ENROLLMENTS
-- =====================================================

INSERT INTO enrollments
(reg_no, course_id, enrolled_at, status)
VALUES

(
    1,
    1,
    '2025-01-10 10:00:00',
    'active'
),

(
    2,
    2,
    '2025-02-01 10:00:00',
    'active'
),

(
    3,
    3,
    '2025-03-01 10:00:00',
    'active'
);


-- =====================================================
-- SAMPLE VIDEOS
-- =====================================================

INSERT INTO videos
(course_id, title, description, youtube_url, added_at)
VALUES

(
    1,
    'Introduction to MERN',
    'Overview of MERN Stack',
    'https://youtube.com/mern_intro',
    '2025-01-12 10:00:00'
),

(
    1,
    'MongoDB Basics',
    'Learn MongoDB CRUD',
    'https://youtube.com/mongodb_basics',
    '2025-01-15 10:00:00'
),

(
    2,
    'Python Basics',
    'Introduction to Python',
    'https://youtube.com/python_basics',
    '2025-02-05 10:00:00'
),

(
    2,
    'Django Models',
    'Working with Django ORM',
    'https://youtube.com/django_models',
    '2025-02-10 10:00:00'
),

(
    3,
    'Java Basics',
    'Introduction to Java',
    'https://youtube.com/java_basics',
    '2025-03-05 10:00:00'
),

(
    3,
    'Spring Boot Intro',
    'Spring Boot Overview',
    'https://youtube.com/springboot_intro',
    '2025-03-10 10:00:00'
);


-- =====================================================
-- VERIFY TABLES
-- =====================================================

SELECT * FROM users;

SELECT * FROM courses;

SELECT * FROM students;

SELECT * FROM enrollments;

SELECT * FROM videos;
USE mern_db;

INSERT INTO users (email, password, role)
VALUES
('admin@mern.com', '$2b$10$J2E8A7FeQY3m7rHnI1wR9u7gYwVhWfr9D3Q3ggNiWj2aL8nO5JjzK', 'admin'),
('student1@gmail.com', '$2b$10$7uR0uM0F9Y8uW0IbLEUuH.b/3TWGJYwYB6L9nTw0h8bC/nN0M8OAK', 'student'),
('student2@gmail.com', '$2b$10$2nHW3K9mU5zIc8sXKzBf0uke4iK/hfE9mD5r0lbKqdfmZ6wU0Lw1G', 'student'),
('student3@gmail.com', '$2b$10$5b0j3lL6i9ot8zB3CabR0.0VAi8jvNyEJr2l5tX8R8m4QAO2MP6lG', 'student');

INSERT INTO courses (course_name, description, fees, start_date, end_date, video_expire_days)
VALUES
('MERN Stack', 'Full Stack Web Development with MERN', 25000, '2025-01-10', '2025-06-10', 180),
('Python Full Stack', 'Python, Django & React', 22000, '2025-02-01', '2025-07-01', 180),
('Java Full Stack', 'Java, Spring Boot & Angular', 24000, '2025-03-01', '2025-08-01', 180);

INSERT INTO students (user_id, name, mobile_no, profile_pic)
VALUES
(2, 'Rahul Sharma', '9876543210', NULL),
(3, 'Anita Verma', '9876543222', NULL),
(4, 'Amit Kumar', '9876543333', NULL);

INSERT INTO enrollments (reg_no, course_id, enrolled_at, status)
VALUES
(1, 1, '2025-01-10 10:00:00', 'active'),
(2, 2, '2025-02-01 10:00:00', 'active'),
(3, 3, '2025-03-01 10:00:00', 'active');

INSERT INTO videos (course_id, title, description, youtube_url, added_at)
VALUES
(1, 'Introduction to MERN', 'Overview of MERN Stack', 'https://youtube.com/mern_intro', '2025-01-12 10:00:00'),
(1, 'MongoDB Basics', 'Learn MongoDB CRUD', 'https://youtube.com/mongodb_basics', '2025-01-15 10:00:00'),
(2, 'Python Basics', 'Introduction to Python', 'https://youtube.com/python_basics', '2025-02-05 10:00:00'),
(2, 'Django Models', 'Working with Django ORM', 'https://youtube.com/django_models', '2025-02-10 10:00:00'),
(3, 'Java Basics', 'Introduction to Java', 'https://youtube.com/java_basics', '2025-03-05 10:00:00'),
(3, 'Spring Boot Intro', 'Spring Boot Overview', 'https://youtube.com/springboot_intro', '2025-03-10 10:00:00');

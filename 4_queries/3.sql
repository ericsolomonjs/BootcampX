SELECT teachers.name, students.name, assignments.name, 
(assistance_requests.completed_at - assistance_requests.started_at) 
AS assistance_requests_duration 
FROM students JOIN assistance_requests ON students.id = student_id
JOIN teachers ON teacher_id = teachers.id
JOIN assignments ON assignments.id = assignment_id
ORDER BY assistance_requests_duration;
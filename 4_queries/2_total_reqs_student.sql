SELECT COUNT(*) AS total_assistances, name
FROM students
JOIN assistance_requests AS reqs
ON students.id = reqs.student_id
WHERE name='Elliot Dickinson'
GROUP BY name;
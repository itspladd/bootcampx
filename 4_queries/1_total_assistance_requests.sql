SELECT COUNT(*) AS total_assistances, name
FROM teachers
JOIN assistance_requests AS reqs
ON teachers.id = reqs.teacher_id
WHERE name='Waylon Boehm'
GROUP BY name;
SELECT teachers.name AS teacher,
       students.name AS student,
       assignments.name AS assignment,
       (reqs.completed_at-reqs.started_at) AS duration
FROM assistance_requests AS reqs
  JOIN teachers ON reqs.teacher_id=teachers.id
  JOIN students ON reqs.student_id=students.id
  JOIN assignments ON reqs.assignment_id=assignments.id
ORDER BY duration ASC;
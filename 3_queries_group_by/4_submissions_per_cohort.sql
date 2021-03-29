SELECT cohorts.name AS cohort, COUNT(assignment_submissions.*) AS total_submissions
FROM students
JOIN cohorts ON students.cohort_id = cohorts.id
JOIN assignment_submissions ON assignment_submissions.student_id = students.id
GROUP BY cohort
ORDER BY COUNT(assignment_submissions.*) DESC;
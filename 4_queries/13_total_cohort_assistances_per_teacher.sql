SELECT teachers.name AS name, cohorts.name AS cohort, COUNT(reqs.*) AS total_assistances
FROM assistance_requests AS reqs
  JOIN teachers ON reqs.teacher_id = teachers.id
  JOIN students ON reqs.student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name='JUL02'
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM assistance_requests AS reqs
  JOIN teachers ON reqs.teacher_id = teachers.id
  JOIN students ON reqs.student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name='JUL02'
ORDER BY teachers.name;
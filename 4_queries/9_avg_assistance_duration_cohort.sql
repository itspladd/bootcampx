SELECT AVG(total_duration) as average_total_duration
FROM (SELECT cohorts.name AS cohort, SUM(completed_at-started_at) AS total_duration
FROM assistance_requests AS reqs
  JOIN students ON reqs.student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY total_duration) AS avgs;
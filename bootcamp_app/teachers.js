const { Pool } = require('pg');
const args = process.argv.splice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM assistance_requests AS reqs
  JOIN teachers ON reqs.teacher_id = teachers.id
  JOIN students ON reqs.student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE '${args[0]}%'
ORDER BY teachers.name;`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.error(err));
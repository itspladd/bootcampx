const { Pool } = require('pg');
const args = process.argv.splice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = args[0];
const queryString = `SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM assistance_requests AS reqs
  JOIN teachers ON reqs.teacher_id = teachers.id
  JOIN students ON reqs.student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teachers.name;`

const values = [`%${cohortName}%`];
console.log(values);
pool.query(queryString, values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.error(err));
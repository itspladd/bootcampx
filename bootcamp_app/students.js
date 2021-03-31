const { Pool } = require('pg');
const args = process.argv.splice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`SELECT students.id,
  students.name AS name,
  cohorts.name AS cohort
FROM students
JOIN cohorts
ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '${args[0]}%'
LIMIT ${args[1]}`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.name} has an id of ${row.id} and was in the ${row.cohort} cohort.`);
  })
})
.catch(err => console.error(err));
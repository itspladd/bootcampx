const { Pool } = require('pg');
const args = process.argv.splice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const name = `%${args[0]}%`;
const limit = args[1];
const values = [name, limit];
const queryString = `SELECT students.id,
students.name AS name,
cohorts.name AS cohort
FROM students
JOIN cohorts
ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2`;

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.name} has an id of ${row.id} and was in the ${row.cohort} cohort.`);
  })
})
.catch(err => console.error(err));
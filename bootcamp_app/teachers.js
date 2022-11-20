const { Pool } = require('pg');
const myArgs = process.argv.slice(2);


const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`SELECT teachers.name, cohorts.id 
FROM assistance_requests
JOIN teachers ON assistance_requests.teacher_id = teachers.id
JOIN cohorts ON teachers.cohort_id
WHERE cohorts.name = '${myArgs[0]}'
ORDER BY teachers.name;`)
.then(() => {
  console.log(`${res.id}: ${res.name}`);
})
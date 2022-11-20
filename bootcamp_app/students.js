const { Pool } = require('pg');
const myArgs = process.argv.slice(2);


const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

let text = `
SELECT id, name, cohorts.name AS cohort_name
FROM students
JOIN cohorts ON cohorts.id=cohorts_id
WHERE cohort_name LIKE '%$1%'
LIMIT $2;
`
let values = [ myArgs[0] ,myArgs[1] ];

pool.query(text, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  })
});


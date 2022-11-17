SELECT cohorts.name AS cohort, total_duration FROM
(SELECT SUM(completed_at-started_at) AS total_duration, cohorts.name as cohort_name
FROM assistance_requests JOIN students ON students.id = student_id 
JOIN cohorts ON cohort_id = cohorts.id
GROUP BY cohort_name) AS q1 JOIN cohorts ON cohort_name = cohorts.name
ORDER BY total_duration;
SELECT day, COUNT(id) FROM assignments 
GROUP BY day
HAVING COUNT(id) > 9
ORDER BY day;
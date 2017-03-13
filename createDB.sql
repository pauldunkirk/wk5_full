CREATE TABLE emp (
id SERIAL PRIMARY KEY,
firstname VARCHAR(20), lastname VARCHAR(20), idnumber NUMERIC(4),
title VARCHAR, salary NUMERIC (6) DEFAULT 0
);

INSERT INTO emp (firstname, lastname, idnumber, title, salary) VALUES ('Paul', 'Dunkirk', 1234, 'boss-man', 350000);

SELECT *
FROM emp;

SELECT round(SUM(salary)/12)
FROM emp;

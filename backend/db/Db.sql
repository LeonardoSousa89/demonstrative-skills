CREATE DATABASE demo;
DROP DATABASE demo;

\c demo

INSERT INTO people VALUES(1,'Mendes Sousa','junior software engineer', 2356.56,'information systems'); 
INSERT INTO people VALUES(2,'Miles Bennett Dyson','senior software engineer', 9386.77,'information systems'); 

SELECT * FROM people;

ALTER TABLE people DROP COLUMN salary; 
ALTER TABLE people ADD COLUMN salary VARCHAR(250); 

ALTER TABLE people DROP COLUMN salary; 
ALTER TABLE people ADD COLUMN salary NUMERIC(250,2); 

\q
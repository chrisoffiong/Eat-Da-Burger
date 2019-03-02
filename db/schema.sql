CREATE DATABASE burgers_db; 

USE burgers_db;

CREATE TABLE burgers (
      id INT NOT NULL AUTO_INCREMENT,
      burger_name VARCHAR(30),
      devoured BOOLEAN default false,
      date TIMESTAMP DEFAULT now(),
	PRIMARY KEY (id)


);
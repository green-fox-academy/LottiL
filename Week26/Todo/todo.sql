CREATE DATABASE IF NOT EXISTS todos; 

USE todos;

DROP TABLE IF EXISTS todolist;

CREATE TABLE todolist (
    id INT AUTO_INCREMENT,
    completed ENUM('false','true') DEFAULT 'false',
    self_description TEXT NOT NUll,
    PRIMARY KEY (id)
);
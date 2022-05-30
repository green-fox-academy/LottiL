CREATE DATABASE IF NOT EXISTS todos; 

USE todos;

DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
    id INT AUTO_INCREMENT,
    text TEXT NOT NUll,
    completed ENUM('false','true') DEFAULT 'false',
    destroyed ENUM('false','true') DEFAULT 'false',
    PRIMARY KEY (id)
);
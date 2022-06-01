CREATE DATABASE IF NOT EXISTS todos; 

USE todos;

DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
    id INT AUTO_INCREMENT,
    text TEXT NOT NUll,
    completed boolean DEFAULT false,
    destroyed boolean DEFAULT false,
    PRIMARY KEY (id)
);
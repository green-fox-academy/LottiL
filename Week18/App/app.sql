CREATE DATABASE my_app;

USE my_app;

CREATE TABLE app (
    id INT AUTO_INCREMENT,
    dt DATETIME NOT NULL,
    what VARCHAR(30) NOT NULL,
    place VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);
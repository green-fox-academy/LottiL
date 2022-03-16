/* CREATE DATABASE todo; */

USE todo;

/* CREATE TABLE users (
    id INT AUTO_INCREMENT,
    user_name   VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE todo_types (
    id INT AUTO_INCREMENT,
    todo_type   VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE todos (
    id INT AUTO_INCREMENT,
    todo   TEXT NOT NULL,
    is_done BOOLEAN DEFAULT false,
    user_id INT NOT NULL,
    todo_type_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (todo_type_id) REFERENCES todo_types(id)
); */

INSERT INTO users (user_name)
VALUES
    ('Lotti'),
    ('Levi'),
    ('Liza');

INSERT INTO todo_types (todo_type) 
VALUES 
    ('housework'),
    ('movies'),
    ('shopping');

INSERT INTO todos (todo,is_done,user_id,todo_type_id) 
VALUES 
    ('make order', false, 3, 1),
    ('buy milk', false, 2, 3),
    ('cook', false, 1, 1);
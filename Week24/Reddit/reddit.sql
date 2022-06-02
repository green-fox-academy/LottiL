CREATE DATABASE IF NOT EXISTS reddit;

USE reddit;

DROP TABLE posts;

CREATE TABLE posts (
    id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    URL VARCHAR(200) NOT NULL,
    timestamp BIGINT NOT NULL,
    score INT NOT NULL DEFAULT 0,
    owner VARCHAR(80) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO posts (title, URL, timestamp, owner) VALUES
("Dear JavaScript", "http://9gag.com", 1494339525, "bela"),
("Crockford", "http://facebook.com", 1494339530, "pityu"),
("my title", "https://github.com/green-fox-academy/teaching-materials/blob/master/project/reddit/backend/javascript.md", 1494339930, "gizi"),
("Crockfords", "https://meet.google.com", 1494339850, "gizi")
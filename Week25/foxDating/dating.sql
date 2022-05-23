CREATE DATABASE dating;

USE dating;

/* DELETE TABLE profiles; */

CREATE TABLE profiles (
    username VARCHAR(50) NOT NULL,
    nickname VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    gender ENUM('man','woman') NOT NUll,
    target_gender ENUM('men','women','both') NOT NUll,
    PRIMARY KEY (id)
);

/* DELETE TABLE matches; */

CREATE TABLE matches (
    id INT AUTO_INCREMENT,
    username1 INT NOT NULL,
    username2 INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (username1) REFERENCES profiles(username),
    FOREIGN KEY (username2) REFERENCES profiles(username)
);
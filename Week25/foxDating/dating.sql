/* CREATE DATABASE dating; */

USE dating;

DROP TABLE profiles;

CREATE TABLE profiles (
    username VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    birth_year INT NOT NULL,
    gender ENUM('man','woman') NOT NUll,
    target_gender ENUM('men','women','both') NOT NUll,
    self_description TEXT,
    profile_picture_url VARCHAR(64) NOT NULL,
    PRIMARY KEY (username)
);

DROP TABLE likes;

CREATE TABLE likes (
    id INT AUTO_INCREMENT,
    source_username VARCHAR(64) NOT NULL,
    target_username VARCHAR(64) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (source_username) REFERENCES profiles(username),
    FOREIGN KEY (target_username) REFERENCES profiles(username)
);
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

/* DELETE TABLE matches; */
/* like-ot tárolni! 3. táblában talán */

CREATE TABLE matches (
    id INT AUTO_INCREMENT,
    username1 VARCHAR(64) NOT NULL,
    username2 VARCHAR(64) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (username1) REFERENCES profiles(username),
    FOREIGN KEY (username2) REFERENCES profiles(username)
);
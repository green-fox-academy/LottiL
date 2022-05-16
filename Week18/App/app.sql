CREATE DATABASE my_app;

USE my_app;

DELETE TABLE app;

CREATE TABLE app (
    id INT AUTO_INCREMENT,
    dt DATETIME NOT NULL,
    what VARCHAR(30) NOT NULL,
    place VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

/* CREATE TABLE baby_output (
    id INT AUTO_INCREMENT,
    date DATETIME NOT NULL,
    peeOrPoo VARCHAR(30) NOT NULL,
    where VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
); */

/* Ha jól értem, a what csak 3 lehetséges értéket vehet fel, ilyenkor érdemes ENUM típust használni. (Biztosítja, hogy véletlenül ne írj be nem kívánt értéket
olyankor is, amikor felhasználó nem vihet be kívülről értéket? */
CREATE DATABASE `todo_db`;

USE `todo_db`; 

CREATE TABLE todos (
    id VARCHAR(16) NOT NULL PRIMARY KEY,
    text VARCHAR(100),
    isDone BOOL
) ENGINE=InnoDB;
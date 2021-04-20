DROP DATABASE IF EXISTS crypto;

CREATE DATABASE crypto;

USE crypto;

CREATE TABLE Users(
  UserId INT NOT NULL AUTO_INCREMENT,
  Name varchar(255),
  USD int,
  Password varchar(255),
  PRIMARY KEY (UserId)
);


INSERT INTO Users (Name, USD, Password) VALUES ('michael', 10000, 'password');
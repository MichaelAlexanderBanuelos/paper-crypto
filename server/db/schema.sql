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

CREATE TABLE Bank(
  BankId INT NOT NULL AUTO_INCREMENT,
  UserId INT,
  PRIMARY KEY (BankId),
  FOREIGN KEY (UserId) REFERENCES USERS (UserId)
);

INSERT INTO Users (Name, USD, Password) VALUES ('michael', 10000, 'password');
INSERT INTO Bank (UserId) VALUES (1);
DROP DATABASE IF EXISTS crypto;

CREATE DATABASE crypto;

USE crypto;

CREATE TABLE Users(
  name varchar(255),
  USD int,
  password varchar(255)
);


INSERT INTO Users (name, USD, password) VALUES ('michael', 10000, 'password');
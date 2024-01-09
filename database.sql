
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "Expenses" (
	"expnese_id" SERIAL PRIMARY KEY,
	"account" VARCHAR (200) NOT NULL,
	"date" TIMESTAMP NOT NULL,
	"status" BOOLEAN DEFAULT false,
	"payee" VARCHAR (500) NOT NULL,
	"category" VARCHAR (50),
	"amount" MONEY NOT NULL
	);
	
	
CREATE TABLE "Income" (
	"Income_id" SERIAL PRIMARY KEY,
	"account" VARCHAR (200) NOT NULL,
	"date" TIMESTAMP NOT NULL,
	"source" VARCHAR (500) NOT NULL,
	"category" VARCHAR (50),
	"amount" MONEY NOT NULL
	);
	
INSERT INTO "Income" ("account", "date", "source", "category", "amount")
VALUES ('Home Checking', '01/03/24', 'main job', 'bills', '500.00'),
('Home Savings', '01/03/24', 'main job', 'new roof', '300.00'),
('Emergency Savings', '01/03/24', 'secondary job', 'Antigua', '250.00');

INSERT INTO "Expenses" ("account", "date", "status", "payee", "category", "amount")
VALUES ('Home Checking', '01/03/24','false','mortgage company','housing','2000.00'),
('Home Checking 2', '01/03/24', 'false', 'electric company','utilities', '80.00'),
('Home Checking', '01/03/24', 'true', 'home insurance','housing','500.00');

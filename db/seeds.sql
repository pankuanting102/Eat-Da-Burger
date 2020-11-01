USE bugers_db

INSERT INTO burgers (burger_name, devoured)
VALUES ("Cheese Burger", true);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Chicken Sandwich", true);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Susage Eggs and Cheese", false);

SELECT * FROM burgers;
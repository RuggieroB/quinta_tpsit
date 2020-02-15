DROP TABLE IF EXISTS ToDos;

CREATE TABLE ToDos
(
	ID INTEGER PRIMARY KEY,
	ToDo TEXT,
	done INTEGER DEFAULT 0
);

INSERT INTO ToDos (ToDo) VALUES ('Andare al San Carlo');
INSERT INTO ToDos (ToDo) VALUES ('Andare alla cena di gala');
INSERT INTO ToDos (ToDo) VALUES ('Andare a casa');
INSERT INTO ToDos (ToDo) VALUES ('Dormire');

.header on

.mode column

SELECT * FROM ToDos;

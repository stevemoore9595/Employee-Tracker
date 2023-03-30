USE owner_db;

INSERT INTO department (name) 
VALUES ('HR'),
('Finance'),
('Customer Service'),
('Marketing'),
('IT');

INSERT INTO role (title, salary, department_id) 
VALUES ('HR Specialist', 70000, 1),
('Accountant', 60000, 2),
('Customer Service Agent', 45000, 3),
('Social Media Agent', 55000, 4),
('Junior Software Developer', 80000, 5);

INSERT INTO employee (first_name, last_name, role_id) 
VALUES ('Merry', 'Giron', 1),
('Jonathan', 'Hansen', 2),
('Carlos', 'Acevedo', 3),
('Emily', 'Richardson', 4),
('Jamie', 'Adams', 5);

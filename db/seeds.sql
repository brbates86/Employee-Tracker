INSERT INTO department (name)
VALUES 
('IT'),
('Finance & Accounting'),
('Sales & Marketing'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 70000, 1),
('Software Engineer', 120000, 1),
('Accountant', 11000, 2),
('Financial Analyst', 130000, 2),
('Marketing Secialist', 60000, 3),
('Sales Lead', 80000, 3),
('Project Manager', 100000, 4),
('Operations Manager', 90000, 4),


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Zak','Sisler', 1, null),
('Sam', 'Tennant', 2, 1),
('Matt', 'Burl', 4, null),
('Doug', 'Timm', 3, 3),
('Claire', 'Bates', 6, null),
('Schuyler', 'Bates', 5, 5),
('Jen' 'Schrute', 7, null),
('Alice', 'Beasley', 8, 7),
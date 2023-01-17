INSERT INTO department (name)
VALUES 
    ('IT'),
    ('Finance & Accounting'),
    ('Sales & Marketing'),
    ('Operations');

SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES  

    ('Full Stack Developer', 80000, 1),
    ('Software Engineer', 120000, 1),
    ('Accountant', 10000, 2),
    ('Financial Analyst', 150000, 2),
    ('Marketing Specialist', 70000, 3),
    ('Sales Lead', 90000, 3),
    ('Project Manager', 100000, 4),
    ('Operations Manager', 90000, 4);

    SELECT * FROM role;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Zak', 'Sisler', 1, null),
('Sam', 'Tennant', 2, 2)
('Matt', 'Burl', 4, null),
('Doug', 'Timm', 3, 3),
('Claire', 'Bates', 6, null),
('Schuyler', 'Bates', 5, 5),
('Jen', 'Schrute', 7, null),
('Alice', 'Beasley', 8, 7);

SELECT * FROM employee;






USE employee_db;

INSERT INTO department (name)
VALUES
    ('Engineering'),
    ('HR'),
    ('Warehouse'),
    ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Senior Dev', 90000, 1),
    ('HR Business Partner', 200000, 2),
    ('Operations Manager', 110000, 2),
    ('Lawyer', 90000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
    ('Jahnathan', 'Exantus', 3),
    ('Dan', 'Campbell', 4),
    ('Marvin', 'Norris', 2),
    ('David', 'Pierre', 1);

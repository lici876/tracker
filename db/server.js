const inquirer = require("inquirer");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "employee_db",
});

// set up error handling in case the connection fails/breaks
connection.connect(function (err) {
  if (err) throw err;
});

function mainMenu() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "what would you like to do?",
        choices: [
          {
            name: "View all employees",
            value: "VIEW_EMPLOYEE",
          },
          {
            name: "View all departments",
            value: "VIEW_DEPARTMENTS",
          },
          {
            name: "View all roles",
            value: "VIEW_ROLES",
          },
          {
            name: "Add an employee",
            value: "ADD_EMPLOYEE",
          },
          {
            name: "Add a department",
            value: "ADD_DEPARTMENT",
          },
          {
            name: "Updating an employee role",
            value: "UPDATING_EMPLOYEE ROLE",
          },
          {
            name: "Quit",
            value: "Quit",
          },
        ],
      },
    ])
    .then(function (answer) {
      console.log(answer.choice);
      switch (answer.choice) {
        case "VIEW_EMPLOYEE":
          viewEmployees();
          break;
        case "VIEW_DEPARTMENTS":
          viewDepartments();
          break;
        case "VIEW_ROLES":
          viewRole();
          break;
        case "ADD_EMPLOYEE":
          addEmployee();
          break;
        case "ADD_DEPARTMENT":
          addDepartment();
          break;
        case "UPDATING_EMPLOYEE ROLE":
          updatingRole();
          break;
        default:
          exitCycle();
      }
    });
}
mainMenu();

function viewEmployees() {
  const query = "SELECT * FROM employee";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    mainMenu();
  });
}

function viewDepartments() {
  const query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    mainMenu();
  });
}

function viewRole() {
  const query = "SELECT * FROM role";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    mainMenu();
  });
}

function addEmployee() {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          massage: "What is your first name?",
        },
        {
          type: "input",
          name: "last_name",
          massage: "what is your first name",
        },
        {
          type: "list",
          name: "role_id",
          massage: "what is your role id",
          choices: [3, 5, 2, 9],
        },
      ])
      .then(function (res) {
        connection.query(
          "INSERT INTO employee (first_name,last_name,role_id) VALUES (?,?,?)",
          [res.first_name, res.last_name, res.role_id],
          (err, res) => {
            if (err) throw err;
            if (res) console.table(res);
            mainMenu()
          }
        );
      });
  });
}

function addDepartment() {
  inquirer
  .prompt([
    {
      name: 'ADD_DEPARTMENT', 
      type: 'input', 
      message: 'Which department would you like to add?'
    }
  ]).then(function(res){
    connection.query('INSERT INTO department (name) VALUE (?)', [res.ADD_DEPARTMENT],
    (err,res)=>{
      if (err)throw err;
      if (res)console.table(res);
      mainMenu()
    }
    );
  })
}
const mySql = require("mysql");

const connection = mySql.createConnection({

    host: "localhost",
    user: 'root',
    password: "",
    database: "test"
});

connection.connect((err) => {

    if (err) {

        console.log("Error")
    }
    else {

        console.log("Connected")
    }
});

//Write query here
connection.query("select * from users", (err, result) => {

    console.log("result", result)
})

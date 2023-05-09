const mySql=require('mysql');
const connection=mySql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
    database: "test"
});

connection.connect((err)=>{

    if(err){

        console.log("Error occurs")
    }
})

module.exports=connection;
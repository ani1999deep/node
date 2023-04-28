const { MongoClient } = require('mongodb')

//mongodb path
const url = "mongodb://0.0.0.0:27017/"
//Pass url through into MongoClient 
const client = new MongoClient(url);

//Define mongod db
const dataBase = "e-comm"

async function getData() {

    let result = await client.connect();
    let db = result.db(dataBase);
    //here define db collection name
    let collection = db.collection('products');
    let response = await collection.find({}).toArray()
    console.log(response);
}
getData()
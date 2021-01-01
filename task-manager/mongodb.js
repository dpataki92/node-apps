// CRUD operations

const {MongoClient, ObjectID} = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {return console.log("Unable to connnect to database!")}

    const db = client.db(databaseName);

/*     db.collection("users").insertOne({
        _id: id,
        name: "Borris",
        age: 35
    }, (error, result) => {
        if (error) return console.log("Unable to insert user!");
        console.log(result.ops)
    })  */


/*     db.collection("users").insertMany([
        {
            name: "Tamas",
            age: 58
        },
        {
            name: "Bonnie",
            age: 38
        }
    ], (error, result) => {
        if (error) return console.log("Unable to insert documents!");

        console.log(result.ops);
    }) */

/*     db.collection("tasks").insertMany([
        {
            description: "Online meeting on January 2, 2pm CET",
            completed: false
        },
        {
            description: "Call Bonnie to check in",
            completed: true
        },
        {
            description: "Read through coding notes",
            completed: true
        }
    ], (error, result) => {
        if (error) return console.log("Unable to insert documents.");

        console.log(result.ops);
    }) */
});
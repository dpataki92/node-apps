// CRUD operations

const {MongoClient, ObjectID} = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {return console.log("Unable to connnect to database!")}

    const db = client.db(databaseName);

/*     db.collection("users").deleteMany({name: "Borris"})
    .then((result) => {
        console.log(result.deletedCount);
    })
    .then((error) => {
        console.log(error)
    }); */

    db.collection("tasks").deleteOne({description: "Call Bonnie to check in"})
    .then((result) => {
        console.log(result.deletedCount);
    })
    .catch((error) => {
        console.log(error);
    })

});
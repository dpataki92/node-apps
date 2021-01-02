const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid!");
            }
        },
        trim: true,
        lowercase: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("Age must be a positive number!");
            }
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minLength: 7,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error("Password cannot contain word 'password'!");
            }
        }
    }
});

/* const me = new User({name: "Greg", email: "    GREG@gmail.com     ", password: "hello0102"});
me.save()
.then(() => {console.log(me)})
.catch((error) => {console.log("Error! ", error)}) */

const Task = mongoose.model("Task", {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const task = new Task({description: "   Clean the house  "});
task.save().then(() => console.log(task)).catch((error)=> {console.log(error)})

/* const me = new User({name: "something", age: "Mike"});

me.save()
.then(() => {console.log(me)})
.catch((error) => {console.log("Error! ", error)}) */


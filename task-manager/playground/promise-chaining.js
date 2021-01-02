require("../src/db/mongoose");
const User = require("../src/models/user");

// 5ff088c099e05d041f7f0338

User.findByIdAndUpdate("5ff088c099e05d041f7f0338", {age: 29}).then((user) => {
    console.log(user);
    return User.countDocuments({age: 1})
})
.then((result) => {console.log(result)})
.catch((e) => {console.log(e)});
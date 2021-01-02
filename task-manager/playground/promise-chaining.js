require("../src/db/mongoose");
const User = require("../src/models/user");

// 5ff088c099e05d041f7f0338

User.findByIdAndUpdate("5ff088c099e05d041f7f0338", {age: 29}).then((user) => {
    console.log(user);
    return User.countDocuments({age: 1})
})
.then((result) => {console.log(result)})
.catch((e) => {console.log(e)});

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age});
    return count;
}

updateAgeAndCount("5ff067050efc1303d1963d12", 45).then((count) => {
    console.log(count);
})
.catch((e) => console.log(e));
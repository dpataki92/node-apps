require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("5ff0b0d034fe240685fdafa6").then((resp) => {
    console.log(resp);
    return Task.countDocuments({completed: false});
})
.then((result) => {
    console.log(result);
})
.catch((e) => {
    console.log(e);
});

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});

    return count;
}

deleteTaskAndCount("5ff0afec2a72c7067b45d61a")
.then((result) => console.log(result))
.catch((e) => {console.log(e)});
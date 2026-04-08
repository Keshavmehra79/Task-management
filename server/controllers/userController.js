const UserModel = require("../models/usermodel");
const TaskModel= require("../models/usertask");
const userLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
        return res.status(400).send({ msg: "Invalid Email" });
    }

    if (user.password != password) {
        return res.status(400).send({ msg: "Invalid Password" });
    }

    return res.send({ user, msg: "Login Successfully!" });
};

const getuserTask=async(req, res) =>{
    const {id} =req.query;
    const task= await TaskModel.find({userid:id})
    res.send(task);
}

const setTaskStatus=async(req, res) =>{
    const {taskID, taskStatus, compDay}=req.body;
    console.log(taskID);
    const task= await TaskModel.findByIdAndUpdate(taskID, {
        taskstatus:taskStatus,
        compday:compDay
    })
    console.log(task);
    res.status(201).send("Task Succefully Updated!!!");
}

module.exports = {
    userLogin,
    getuserTask,
    setTaskStatus
}
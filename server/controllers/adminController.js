const AdminModel=require("../models/adminmodel")
const UserModel = require("../models/usermodel");
const TaskModel = require("../models/usertask");
const RandomPass = require("../middleware/randompassword");
const nodemailer = require('nodemailer');
const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    const admin = await AdminModel.findOne({ email: email });
    if (!admin) {
        res.status(400).send({ msg: "Invalid Email" });
    }
    if (admin.password != password) {
        res.status(400).send({ msg: "Invalid Password" });
    }
    res.send({ admin, msg: "Login Succesfully!" });
}


const createUser = async (req, res) => {
    const { name, email, post } = req.body;
    const userPassword = RandomPass.randomPassword();
    let mailTransporter =
        nodemailer.createTransport(
            {
                service: 'gmail',
                auth: {
                    user: process.env.MY_GMAIL,
                    pass: process.env.PASS_KEY
                }
            }
        );

    let mailDetails = {
        from: process.env.MY_GMAIL,
        to: email,
        subject: 'Employee Registration ID deatils',
        text: `Greetings \n Welcome : ${name}! \n
           Email : ${email} \n
           You can Login by Using Password : ${userPassword}
    `
    };
    const user = await UserModel.create({
        name: name,
        email: email,
        post: post,
        password: userPassword
    })


    mailTransporter
        .sendMail(mailDetails,
            function (err, data) {
                if (err) {
                    console.log('Error Occurs');
                } else {
                    console.log('Email sent successfully');
                }
            });
    res.send("Email Succesfully send!")
}

const getUserData = async (req, res) => {
    const user = await UserModel.find();
    res.status(200).send(user);
}


const assignTask = async (req, res) => {
    const { userid, usertask, days } = req.body;
    const task = await TaskModel.create({
        usertask: usertask,
        days: days,
        userid: userid
    })
    res.send("OKKKK");
}

const getTaskReport=async(req, res) =>{
     const task = await TaskModel.find().populate("userid");
     res.send(task);
}


const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await UserModel.countDocuments();
    const totalTasks = await TaskModel.countDocuments();

    const completedTasks = await TaskModel.countDocuments({ taskstatus:"Fully Completed"});
    
    res.send({
      totalUsers,
      totalTasks,
      completedTasks,
      
    });

  } catch (error) {
    res.status(500).send({ message: "Server Error" });

  }
};


module.exports = {
    adminLogin,
    createUser,
    getUserData,
    assignTask,
    getTaskReport,
    getDashboardStats
}


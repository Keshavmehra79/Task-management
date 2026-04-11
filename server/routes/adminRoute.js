const express = require("express");
const route = express.Router();
const AdminController = require("../controllers/adminController");

route.post("/adminlogin",  AdminController.adminLogin);
route.post("/createuser",  AdminController.createUser);
route.get("/getuserdata",  AdminController.getUserData);
route.post("/assigntask",  AdminController.assignTask);
route.get("/gettaskreport",  AdminController.getTaskReport);
route.get("/getdashboard",AdminController.getDashboardStats);

module.exports = route;

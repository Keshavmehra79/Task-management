
const express=require("express");
const app=express();
const adminRouter=require("./routes/adminRoute")
const userRouter=require("./routes/userLogin")
const mongoose=require("mongoose");
const cors=require("cors");
const bodyparser=require("body-parser")
app.use(cors())
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
mongoose.connect("mongodb://127.0.0.1:27017/task").then(()=>{
    console.log("Db connected succefully");
})  

app.use("/admin",adminRouter);
app.use("/user",userRouter);


app.listen(9000,()=>{
    console.log("server run on 9000 port ");
    
})



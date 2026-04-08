require("dotenv").config();
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
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Db connected succefully");
})  

app.use("/admin",adminRouter);
app.use("/user",userRouter);

app.listen(process.env.PORT,()=>{
    console.log("server run on 9000 port ");
    
})



import {BrowserRouter, Route, Routes}  from "react-router-dom"
import Home from "./pages/Home";
import AdminDashBoard from "./admin/Admindashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateUser from "./admin/Createuser";
import AssignTask from "./admin/Assigntask";
import UserDashBoard from "./user/Userdashboard";
import UserTask from "./user/Usertask";
import SeeReport from "./admin/Seereport";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
     </Routes> 
     <Routes>
      <Route path="admindashboard" element={<AdminDashBoard/>}>
           <Route path="createuser" element={<CreateUser/>} />
           <Route path="assigntask" element={<AssignTask/>}/>
           <Route path="seereport" element={<SeeReport/>  }/>
      </Route>
     </Routes>
      <Routes>
      <Route path="userdashboard" element={<UserDashBoard/>}>
       <Route path="yourtask" element={<UserTask/>} />         
      </Route>
     </Routes>
    
    </BrowserRouter>
            <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}


export default App;
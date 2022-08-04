import { useEffect,useState } from 'react';
import {  
    Routes,
    Route,
  } from "react-router-dom";
import "../../css/app.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layouts
import FrontLayout from '../layouts/FrontLayout';
import PrivateLayout from "../layouts/PrivateLayout";
// Pages 
import Home from "../pages/Home";
import PageNotFound404 from "../pages/PageNotFound404";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from '../pages/admin/Dashboard';
import Profile from '../pages/admin/Profile';
import UserList from '../pages/admin/UserList';

export default function Web() {
const [loading, setLoading] = useState(1);
    useEffect(() => {
        setTimeout(() => {
            setLoading(0);
        }, 1000);
    });
    if(loading){
        return(
            <>
                <div className="lodder">
                    <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        );
    }else{
        return (
            <>     
                <ToastContainer />              
               <Routes>
                    <Route path="/" element={<FrontLayout />}>
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login  />} />
                        <Route path="register" element={<Register />} />
                        <Route path="*" element={<PageNotFound404 />} />
                    </Route> 
                    
                    <Route path="dashboard" element={<PrivateLayout/>}>
                        <Route index element={<Dashboard />} />
                        <Route path="profile" element={<Profile  />} />
                        <Route path="users" element={<UserList  />} />
                    
                    </Route>       
                </Routes>
            </>
        );
    }
}
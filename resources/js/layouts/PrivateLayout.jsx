import { useEffect,useState } from 'react';
import { useNavigate,Outlet } from "react-router-dom";
import {Helmet} from "react-helmet";
import { toast } from 'react-toastify';
import AdminHeader from "./parts/AdminHeader";


export default function PrivateLayout() {
    const navigate = useNavigate();
    const checkAuth = () =>{
        var _token = sessionStorage.getItem("_token");
        if(!_token){
            toast.error('Try to login ', {
                position: toast.POSITION.BOTTOM_CENTER,
                class:"bg-success",
                theme: "dark"
            });
            navigate('/login');
        }
    }
    useEffect(()=>{
        checkAuth();
    });
    return (
        <>              
            <Helmet>           
            </Helmet>
            <AdminHeader/>
            <div className="container py-5">
                <Outlet />
                <p>Footer</p>
            </div>           
        </>
    );
    
}

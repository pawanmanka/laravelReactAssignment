import { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate,Outlet } from "react-router-dom";
import { toast } from 'react-toastify';
export default function AdminHeader() {
    const navigate = useNavigate();
    const logout =()=>{
        
        sessionStorage.removeItem("_token");
        toast.success("Successfully Logout !", {
            position: toast.POSITION.BOTTOM_CENTER,
            class:"bg-success",
            theme: "dark"
          });
        navigate('/login');
    }
    return (
        <>              
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">                    
                    <Link className="navbar-brand" to="/">Admin</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link"  to="/dashboard">Dashboard</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link className="nav-link"  to="/dashboard/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/dashboard/users">User List</Link>
                        </li> 
                    </ul>
                    <button className="btn btn-danger" onClick={logout} type="button">Logout</button>
                    </div>
                </div>
            </nav>         
        </>
    );
    
}

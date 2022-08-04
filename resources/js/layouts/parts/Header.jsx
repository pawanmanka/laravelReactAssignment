import { useEffect,useState } from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    const _token = sessionStorage.getItem('_token');
    return (
        <>              
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">                    
                    <Link className="navbar-brand" to="/">Front</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active"  to="/">Home</Link>
                        </li>
                        {
                            _token?(
                                <li className="nav-item">
                                    <Link className="nav-link"  to="/dashboard">Dashboard</Link>
                                </li>
                                
                            ):
                            (
                                <>
                                 <li className="nav-item">
                                    <Link className="nav-link"  to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"  to="/register">Register</Link>
                                </li>
                                </>
                            )
                        }
                       
                       
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-success" type="button">Search</button>
                    </form>
                    </div>
                </div>
            </nav>          
        </>
    );
    
}

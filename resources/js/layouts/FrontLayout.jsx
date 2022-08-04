import { useEffect,useState } from 'react';
import { Link,Outlet } from "react-router-dom";
import {Helmet} from "react-helmet";

import Header from "./parts/Header";

export default function FrontLayout() {
  
    return (
        <>              
            <Helmet>
           
            </Helmet>
            <Header/>
            
            <div className="container">            
                <Outlet />            
            </div>

        </>
    );
    
}

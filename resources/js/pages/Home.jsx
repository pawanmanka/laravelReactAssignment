import { useEffect,useState } from 'react';
import { Link,Outlet } from "react-router-dom";
import {Helmet} from "react-helmet";
import axios from "axios";

export default function Home() {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(1);
    const fetchProductDemo = ()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res => {         
          setProducts(res.data);
          setLoading(0);
        }).catch(error => {
        
        }); 
    }
    useEffect(()=>{
        fetchProductDemo();
    },[]);
    return (
        <>              
            <Helmet>
           
            </Helmet>
            <div className="row py-5">
                <div className="col-sm-12">
                    <h4>Fake Store Api Data for Home page : </h4>
                </div>
                { 
                        loading
                        ?(
                        <div className="product-loadder">
                            <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        )
                        :(
                            <>
                               {products.map((data,index) => (
                                <div className="col-sm-3 my-2" key={index}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="image">
                                                <img src={data.image}  alt="" />
                                            </div>
                                            <div className="content">
                                                <h6 class="title" title={data.title}>{data.title}</h6>
                                                <p class="desc" title={data.description}>{data.description}</p>
                                                <p><span class="text-success"> Price </span>: {data.price} $</p>
                                                <button class="btn btn-info w-100">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </>
                        )
                        
                }
            </div>
            

           
        </>
    );
    
}

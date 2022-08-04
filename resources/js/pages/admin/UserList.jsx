import { useEffect,useState } from 'react';
import { Link,Outlet } from "react-router-dom";
import {Helmet} from "react-helmet";
import axios from "axios";
import { toast } from 'react-toastify';
import Moment from 'react-moment';
import ReactPaginate from 'react-paginate';
export default function UserList() {
  
  const [users,setUsers] = useState([]);
  const [loading, setLoading] = useState(1);  
  const [lastPage, setLastPage] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [totalRec, setTotalRec] = useState(0);
  const [fromRec, setFromRec] = useState(0);
  const [toRec, setToRec] = useState(0);
  const fetchUser = async(page)=>{
      setLoading(1);    
      const _token =  sessionStorage.getItem("_token");
        if(_token){
        axios.get(APP_URL+'/api/users?page='+page+'&perPage='+perPage,{
            headers:{
                'Authorization': `Bearer ${_token}` 
            }
        })
        .then(res => {
            setUsers(res.data.data.data)        
            setLastPage(res.data.data.last_page);                         
            setTotalRec(res.data.data.total);          
            setFromRec(res.data.data.from);   
            setToRec(res.data.data.to);   
            setLoading(0);
        
        }).catch(error => {
            
            if (error.response) {
                
                toast.error(error.response.data.message, {
                    position: toast.POSITION.BOTTOM_CENTER,
                    class:"bg-success",
                    theme: "dark"
                });
                            
                
                }else{
                toast.error('Something went wrong !', {
                    position: toast.POSITION.BOTTOM_CENTER,
                    class:"bg-success",
                    theme: "dark"
                });
            }
            setLoading(0);
        }); 
    }
  }
  const handlePageClick = (event) => {
    const page  = event.selected+1;    
    fetchUser(page);
  };
  const handlePerPageClick = (event) => {     
    setPerPage(event.target.value);
    setTimeout(function(){
        fetchUser(1);
    },900);
    
  };
  useEffect(()=>{
    fetchUser(1);
  },[]);
    return (
        <>              
            <Helmet>
                <title>User List</title>
            </Helmet>
            <div className="row card " style={{padding:"20px"}}>
                {/* <div className="col-sm-2">
                    <select defaultValue = {perPage} onChange={handlePerPageClick} name="perpage" id="perpage">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div> */}
                <div className="col-sm-6">
                    Showing {fromRec}-{toRec} of {totalRec}
                </div>
                <table className='table table-reponsive table-bordered'>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Created at</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            loading
                            ?
                            (<>
                                <tr>
                                    <td colSpan="4" style={{textAlign:"center"}}>
                                        <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </td>
                                </tr>
                            </>)
                            :(
                                <>
                                {users.map((data,index) => (
                                
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.roles[0].name}</td>
                                    <td>                                    
                                        <Moment format="DD/MM/YYYY HH:II:SS">
                                        {data.created_at}
                                        </Moment>
                                    </td>
                                </tr>
                                ))}
                                                    
                                </>
                            )
                            
                        }
                        
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ReactPaginate 
                        className='pagination'
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={lastPage}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        
                    />
                </nav>
            </div>
                           
        </>
    );
    
}

import { useEffect,useState } from 'react';
import { useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";
import {  useDispatch } from 'react-redux'
import { login,token } from '../../redux/reducers/AuthReducers'
import { toast } from 'react-toastify';
import { Formik } from 'formik';
export default function Login() {
    
    const navigate = useNavigate();    
    var formvalue = {email: '',password: ''};  
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(login(),'asdajskdhjaskd');
    },[]);
    const formSubmit = async(values, { setSubmitting,resetForm })=>{
        setSubmitting(true);  
        axios.post(APP_URL+'/api/auth/login',values)
        .then(res => {
         ;
            resetForm();
            sessionStorage.setItem("_token", res.data.data.token);
            dispatch(token());
            // dispatch(login(res.data.data));

            toast.success("Successfully Login !", {
                position: toast.POSITION.BOTTOM_CENTER,
                class:"bg-success",
                theme: "dark"
              });
            setSubmitting(false)
            navigate('/dashboard/users');
        
        }).catch(error => {
           
            if (error.response) {
                // console.log(error.response);
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
            setSubmitting(false);
        });  
       
    } 
    
    const formValidation = values => {
        const errors = {};
        
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Password is required';
            }
      
       
        return errors;
    }
    return (
        <>              
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="row align-items-center py-4">
                <div className="col-sm-4"></div>
                <div className="col-sm-4 ">
                    <div className="card " >            
                        <div className="card-body"> 
                        <Formik
                            initialValues={formvalue}
                            validate={formValidation}
                            onSubmit={formSubmit}
                            >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                

                                <form onSubmit={handleSubmit}>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email * : </label>
                                        <input type="email" className="form-control" id="email" placeholder="name@example.com"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}/>
                                        <div className="error">{errors.email && touched.email && errors.email}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password * : </label>
                                        <input type="password" className="form-control" id="password" autoComplete="off" placeholder='Password' 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}/>
                                        <div className="error"> {errors.password && touched.password && errors.password}</div>
                                    </div>
                                    
                                    <div className="form-group mb-30">
                                        <button type="submit" className="btn py-2 mt-3 w-100 btn-info" disabled={isSubmitting}>
                                            { 
                                                (isSubmitting)
                                                    ?
                                                    <div className="spinner-border text-light" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                    :
                                                    'Login'
                                            }
                                        </button>
                                    
                                    </div>
                                   
                                </form>
                            )}
                            </Formik>                    
                            
                            
                        </div>
                    </div>            
                </div>
                <div className="col-sm-4"></div>
            </div>
            
        </>
    );
    
}

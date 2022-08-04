import { useEffect,useState } from 'react';
import { Link,Outlet,useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import { toast } from 'react-toastify';
import { Formik } from 'formik';
export default function Register() {
    const navigate = useNavigate();    
    var formvalue = {name:'',email: '',role:'', password: '',password_confirmation:'' };  
    const formSubmit = async(values, { setSubmitting,resetForm })=>{
        setSubmitting(true);    
        
            axios.post(APP_URL+'/api/auth/register',values)
            .then(res => {
               
                setSubmitting(false);
                resetForm();
                
                sessionStorage.setItem("_token", res.data.data.token);
                toast.success("Successfully Register !", {
                    position: toast.POSITION.BOTTOM_CENTER,
                    class:"bg-success",
                    theme: "dark"
                    });
                navigate('/dashboard/users');
            
            }).catch(error => {
                console.log(error.response);
                if (error.response) {
                  
                    const {errors} = error.response.data;                   
                    for (const [key, value] of Object.entries(errors)) {                        
                        toast.error( key+ ' : '+ value, {
                            position: toast.POSITION.BOTTOM_CENTER,
                            class:"bg-success",
                            theme: "dark"
                        });
                    }
                   
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
        if (!values.name) {
            errors.name = 'Full name is required';
            }
        if (!values.role) {
            errors.role = 'Role is required';
            }
       
        if (!values.password_confirmation) {
            errors.password_confirmation = 'Confirm Password is required';
            } 

        if (values.password_confirmation!= values.password) {
            errors.password_confirmation = 'Confirm Password is not match with password';
            errors.password = 'Password is not match  with Confirm Password';
        } 
       
        return errors;
    }
    return (
        <>              
            <Helmet>
                <title>Register</title>
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
                                        <label htmlFor="name" className="form-label">Name * : </label>
                                        <input type="text" name="name"className="form-control" id="name" placeholder="Full Name" 
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.name}/>
                                          <div className="error">{errors.name && touched.name && errors.name}</div>
                                    </div>
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
                                    <div className="form-group">
                                        <label htmlFor="password_confirmation" className="form-label">Confirm Password * : </label>
                                        <input required=""  className="form-control"type="password" name="password_confirmation" placeholder="Confirm password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password_confirmation}/>
                                            <div className="error">{errors.password_confirmation && touched.password_confirmation && errors.password_confirmation}</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password_confirmation" className="form-label">Select Role * : </label>
                                        <select name="role" className="form-control" id="role" onChange={handleChange}
                                            
                                            value={values.role}>
                                            <option value="">Select User Role </option>
                                            <option value="Administrator">Administrator</option>
                                            <option value="Subscriber">Subscriber</option>
                                            <option value="Editor">Editor</option>
                                            <option value="Author">Author</option>
                                        </select>                                        
                                            <div className="error">{errors.role && touched.role && errors.role}</div>
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
                                                    'Register'
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

import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup';

export function ShopperRegister() {

    const navigate = useNavigate();
    
    return (
        <div className="container-fluid">
            <Formik
            initialValues={{
                UserId : '',
                UserName : '',
                Password : '',
                Email : '',
                Age : 0,
                Mobile : '',
            }}
            validationSchema={
                yup.object({
                    UserId : yup.string()
                                .required('User Id Required'),
                  UserName : yup.string()
                                .required('UserName Required'),
                  Password : yup.string()
                                .required('Password Required'),
                     Email : yup.string()
                                .required('Email Required'),
                       Age : yup.string()
                                .required('Age Required'),
                    Mobile : yup.number()
                                .required('Mobile Required')
                })
            }
            onSubmit={
                (value)=>{
                    axios({
                        method : 'post',
                        url : 'http://127.0.0.1:8080/registeruser',
                        data:value
                    })
                    .then(()=>{
                       alert("Register Successfully..")
                       navigate("/login")
                    })
                }
            }
            >
                <Form>
                <h3>User Register</h3>
                    <dl>
                        <dt>User Id:-</dt>
                        <dd><Field type='text' name='UserId' /></dd>
                        <dd className="text-danger"><ErrorMessage name='UserId'/></dd>
                        <dt>UserName:-</dt>
                        <dd><Field type='text' name='UserName' /></dd>
                        <dd className="text-danger"><ErrorMessage name='UserName'/></dd>
                        <dt>Password:-</dt>
                        <dd><Field type='password' name='Password' /></dd>
                        <dd className="text-danger"><ErrorMessage name='Password'/></dd>
                        <dt>Email:-</dt>
                        <dd><Field type='text' name='Email' /></dd>
                        <dd className="text-danger"><ErrorMessage name='Email'/></dd>
                        <dt>Age:-</dt>
                        <dd><Field type='number' name='Age' /></dd>
                        <dd className="text-danger"><ErrorMessage name='Age'/></dd>
                        <dt>Mobile:-</dt>
                        <dd><Field type='text' name='Mobile' /></dd>
                        <dd className="text-danger"><ErrorMessage name='Mobile'/></dd>
                        <button className="btn btn-primary">Login</button>
                    </dl>
                    <Link to="/login">Already User</Link>
                </Form>
            </Formik>
        </div>
    )
}

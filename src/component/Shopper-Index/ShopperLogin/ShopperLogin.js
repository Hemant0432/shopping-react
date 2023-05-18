import axios from "axios";
import { ErrorMessage, Field, Form, Formik, yupToFormErrors } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup';
export function ShopperLogin() {

    const navigate = useNavigate();
    const [cookie , setCookie , removeCookie] = useCookies();

    // <div></div>
    return (
        <div className="container-fluid">
            <Formik
                initialValues={{
                    "UserName": "",
                    "Password": "",
                }}
                validationSchema={
                    yup.object({
                        UserName: yup.string()
                            .required('User Name Required'),
                            Password: yup.string()
                            .required('Password Required'),
                    })
                }
                onSubmit={
                    (value)=>{
                        axios({
                            method: "get",
                            url : "http://127.0.0.1:8080/Shopper2",
                        })
                        .then((response)=>{
                            for(var user of response.data){
                                if (user.UserName == value.UserName && user.Password == value.Password) {
                                    setCookie("UserName" , value.UserName);
                                    alert("Login Successfully")
                                    navigate("/Home")
                                } else {
                                    navigate("/Invalid")
                                }
                            }
                        })
                    }
                }
            >
                <Form>
                    <h3>User Login</h3>
                    <dl>
                        <dt>UserName</dt>
                        <dd><Field type='text' name='UserName' /></dd>
                        <dd className="text-danger"><ErrorMessage name='UserName' /></dd>
                        <dt>Password</dt>
                        <dd><Field type='password' name='Password' /></dd>
                        <dd className="text-danger"><ErrorMessage name='Password' /></dd>
                    </dl>
                    <button className="btn btn-primary">Login</button>
                </Form>
            </Formik>
                    <Link to="/Register">Back To Register</Link>
        </div>
    )
}
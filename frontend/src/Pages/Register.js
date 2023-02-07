import React, { useState } from "react";
import { REGISTER_USER } from "../GraphQL/Mutation";
import { useMutation } from "@apollo/client";

export const Register = (props) => {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    
    const [ addUser, { loading } ] = useMutation(REGISTER_USER, {
		variables: values
	});

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser();
    }


    // onChange={(e) => setLastName(e.target.value)}
    return (
        <div class="container mt-5 border border-dark shadow p-3 mb-5" style={{width:'40rem'}}>
            <h2 class="mb-5">SIGN UP</h2>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <div class="row">
                        <div class="col">
                            <input class="form-control" type="text" placeholder="First Name" name="fname" value={values.firstName} onChange={onChange}/>
                        </div>
                        <div class="col">
                            <input class="form-control" type="text" placeholder="Last Name" name="lname" value={values.lastName} onChange={onChange}/>
                        </div>
                    </div>
                </div>    
                <div class="mb-3">
                    <input class="form-control" type="text" placeholder="Address" name="address" value={values.address} onChange={onChange}/>
                </div>    
                <div class="row mb-3">
                    <div class="col">
                        <input class="form-control" type="email" placeholder="Email" name="email" value={values.email} onChange={onChange}/>
                    </div>
                    <div class="col">
                        <input class="form-control" type="text" placeholder="Phone Number" name="phone" value={values.phone} onChange={onChange}/>
                    </div>
                </div>
                <div class="mb-3">
                    <input class="form-control" type="password" placeholder="Password" name="password" value={values.password} onChange={onChange}/>
                </div>                      
                <div class="mb-5">
                    <input class="form-control" type="password" placeholder="Confirm Password" name="password" value={values.confirmPassword} onChange={onChange}/>
                </div>
                <button class="btn btn-primary mb-2" type="submit">REGISTER</button>
            </form>
            <a>Already have an account? </a><a style={{cursor:'pointer'}} className="link-btn" onClick={() => props.onFormSwitch('login')}>Sign In</a>
        </div>
    )
}
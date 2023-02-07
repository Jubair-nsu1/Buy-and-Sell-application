import React, { useState, } from "react";
import { useApolloClient,useMutation } from "@apollo/client";
import { LOGIN_USER } from "../GraphQL/Mutation";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const client = useApolloClient();
    const [login, { loading, error }] = useMutation(
        LOGIN_USER,
        {
            onCompleted({ login }) {
              localStorage.setItem('token', login);
              if (login) {
                client.writeData({ data: { isLoggedIn: true } });
              }
            }
          }
    );
    if (loading) return <p>Loading,... Please wait.</p>;
    if (error) return <p>An error occurred</p>;



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }

    return (
        <div class="container mt-5 border border-dark shadow p-3 mb-5" style={{width:'40rem'}}>
            <h2 class="mb-5">SIGN IN</h2>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <input class="form-control" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" placeholder="Email Address" 
                        id="email" 
                        name="email" 
                    />
                </div>    
                <div class="mb-5">
                    <input class="form-control" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        type="password" 
                        placeholder="Password" 
                        id="password" 
                        name="password" 
                    />
                </div>           
                
                <button class="btn btn-primary mb-2" type="submit">LOGIN</button>
            </form>
            <a>Don't have an account? </a><a style={{cursor:'pointer'}} className="link-btn" onClick={() => props.onFormSwitch('register')}>Sign up</a>
        </div>
        
    )
}
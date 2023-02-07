import React, { useState } from "react";

export const Home = ({email,firstName}) => {
    // const {loading,data} = useQuery();

    return (
        <div class="container mt-5 border border-dark shadow p-3 mb-5" style={{width:'40rem'}}>
            <h2 class="mb-5">WELCOME {firstName}</h2>
            <p class="mb-3">Your Email is: {email}</p>
            
            
            <button class="btn btn-primary mb-2" type="submit">Logout</button>
            
        </div>
        
    )
}
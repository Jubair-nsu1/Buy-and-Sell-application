import './App.css';
import React, { useState } from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//Components
import NavBar from './Components/Navbar'

//Pages
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";

function App() {
  // const client = new ApolloClient({
  //   uri: "http://localhost:3001/graphql",
  //   cache: new InMemoryCache(),
  // });

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
      <div className="App">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
      </div>
  );
}

export default App;

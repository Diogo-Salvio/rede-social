import React from "react";

import Header from "./components/Header"
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";

import "./style.css"








const Home = () => {
    

    
    return (
        <div className="root"> 

            <Header />           
            
            <div className="main">

            <Feed />
            <NavBar />

            </div>
        </div>
    );
}

export default Home;
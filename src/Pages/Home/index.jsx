import React from "react";

import Header from "./components/Header/Header"
import Feed from "./components/Feed/Feed";
import NavBar from "./components/NavBar/NavBar";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import "./style.css"


const Home = () => {
    
    return (
        <div className="root"> 
            <div>
                <Header />           
            </div>

            <div className="main">

                <Container maxWidth="lg">
                    <Box display="flex">
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>                    
                
            </div>
        </div>
    );
}

export default Home;
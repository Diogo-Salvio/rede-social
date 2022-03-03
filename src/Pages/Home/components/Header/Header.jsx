import React from "react";

import { Button } from "@mui/material";

import './style.css'


const Header = () => {
    

    
    return (
        <div className="header">
            <div className="toolbar">
            
                <div className="">
                    <img className="logo" src="/images/logo.png" />
                </div>
                
                <div className="">
                    <Button color="primary" variant="contained">Novo Post</Button>
                    <span>Img1</span>
                    <span>Img2</span>
                </div>

            </div>
    </div>
    );
}

export default Header;
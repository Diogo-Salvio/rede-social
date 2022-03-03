import React from "react";

import { Button } from "@mui/material";
import SvgIcon from '@mui/material/SvgIcon'
import { Bell } from 'react-feather'
import Avatar from '@mui/material/Avatar';

import './Header.css'


const Header = () => {
    

    
    return (
        <div className="header">
            <div className="toolbar">
                <img className="logo" src="/images/logo.png" />
    
                <div className="user-section" >
                    <Button color="primary" variant="contained">Novo Post</Button>
                    <SvgIcon> <Bell /> </SvgIcon>
                    <Avatar alt="Avatar" src="" />
                </div>

            </div>
    </div>
    );
}

export default Header;
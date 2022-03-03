import React from "react";

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';

import "./NavBar.css"

const NavBar = () => {
    return (
        <Paper className="root">
            <Button className="button" variant="outlined" color="secondary">Registrar Gratis</Button>
        </Paper>
    );
}


export default NavBar;
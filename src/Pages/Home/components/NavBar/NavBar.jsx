import React from "react";

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import "./NavBar.css"


const tags = [
    {id: 1, name:'reactjs'},
    {id: 2, name:'javascript'},
    {id: 3, name:'dotnet'},
    {id: 4, name:'php'},
    {id: 5, name:'materialdesing'},
    {id: 6, name:'webdev'},
]


const NavBar = () => {
    return (
        <Paper className="nav-bar-cont">
            <Button className="button" variant="outlined" color="secondary">Registrar Gratis</Button>
            <ListSubheader>Tags em Alta</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-$(item.name)`}>
                    <ListItemText primary={`#${item.name}`} />
                  </ListItem>
                ))
            }

            <ListItem button>
                Exibir mais tags
            </ListItem>


        </Paper>
    );
}


export default NavBar;
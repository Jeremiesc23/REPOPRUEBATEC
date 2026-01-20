import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div style={{
            width: 240,
            background: 'linear-gradient(45deg, #4CAF50, #8BC34A)', // Fondo degradado
            color: 'white',
            paddingTop: 20,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100vh',
        }}>
            <List>
                <ListItem button component={Link} to="/profesiones" style={{ padding: '10px 20px' }}>
                    <ListItemText primary="Profesiones" />
                </ListItem>
                <Divider sx={{ borderColor: '#fff' }} />
                <ListItem button component={Link} to="/personas" style={{ padding: '10px 20px' }}>
                    <ListItemText primary="Personas" />
                </ListItem>
            </List>
        </div>
    );
}

export default Sidebar;

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const CustomToolbar: React.FC = () => {

    const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Application
        </Typography>
        <Button color="inherit" onClick={()=>{navigate("/Login")}}>Login</Button>
        <Button color="inherit" onClick={()=>{navigate("/Register")}}>Register</Button>
        
      </Toolbar>
    </AppBar>
  );
};

export default CustomToolbar;
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Tab , Tabs, Box } from '@mui/material';
import { theme } from '../../theme';


const CustomToolbar: React.FC = () => {

    const navigate = useNavigate();

    const [value, setValue] = useState(0);

  return (
  
    <AppBar position="static" sx={{backgroundColor:"#2173a3"}}>
    <Box sx={{ display: "flex",  justifyContent: "flex-end"}}>
        <Tabs
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          textColor="inherit"
          TabIndicatorProps={{ style: { backgroundColor: "#ffffff" } }} // Active tab underline color
        
        >
          <Tab label="Home" onClick={() => navigate("/")} />
          <Tab label="Login" onClick={() => navigate("/Login")} />
          <Tab label="Register" onClick={() => navigate("/Register")} />
        </Tabs>
      </Box>
    </AppBar>

  );
};

export default CustomToolbar;
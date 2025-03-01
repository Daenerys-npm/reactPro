import React from 'react';
import CustomToolbar from '../../components/ToolBar'
import Footer from '../../components/Footer';
import { Box } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
     
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <h1>Home Page</h1>
      </Box>
     
    </Box>
  );
};

export default Home;
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
         mt: 'auto',
        p: 2,
        backgroundColor: "#021853ff",
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">My Footer Content</Typography>
    </Box>
  );
};

export default Footer;
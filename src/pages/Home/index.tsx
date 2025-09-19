import React from 'react';
import CustomToolbar from '../../components/ToolBar'
import Footer from '../../components/Footer';
import { Box, Checkbox, Typography } from '@mui/material';
import {Accordion, AccordionDetails,AccordionSummary} from '@mui/material';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Home: React.FC = () => {
  return (
    <Box sx={{ display: 'flex',   alignContent:"center",
        justifyContent:"center", minHeight: '100vh' , margin: "0 auto",}}>
     
      <Box sx={{
    
      
       }}>
       
         <img src='/SunbaLogo1.jpg' alt='Sunba Studios'></img>
      </Box>
     
     {/* <Box>
      <Typography>Accordian</Typography>
      <Accordion >
        <AccordionSummary >Accordian1</AccordionSummary>
        <AccordionDetails>These are the details for Accordian1</AccordionDetails>
      </Accordion>
     </Box> */}

{/* 
      <Box>
        <select onChange={(event)=>console.log(event?.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>

<Checkbox></Checkbox> 

      </Box>*/}

    </Box>
  );
};

export default Home;
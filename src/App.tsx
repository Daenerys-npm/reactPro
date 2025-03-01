import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import {theme, muiTheme} from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import CustomToolbar from './components/ToolBar';
import Footer from './components/Footer';



const App: React.FC = () => {
    return (
        <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
           
                        <CustomToolbar />
                        <div style={{ display: 'flex', minHeight: '100vh' }}>
                       
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/user" element={<ProtectedRoute component={User } />} />
                        </Routes>
                    
                <Footer />
                </div>
            
               
            </Router>
         
        </ThemeProvider>
        </MuiThemeProvider>
    );
};

export default App;
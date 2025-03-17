import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { UseSelector } from 'react-redux';
import  {RootState} from '../../redux/store';

const Login: React.FC = () => {
    const { control,watch, handleSubmit, formState: { errors } } = useForm();
    const users = useSelector((state: RootState) => state.users.userInfo);


  const username = watch("username");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(login({ username }));
        if(username === "abc"){
            console.log(users);
      navigate("/User");
     
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '5% auto',
                border: '1px solid #3f51b5',
                borderRadius: '8px',
                height: '400px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#ffffff',
                width: { xs: '90%', sm: '400px' }, // Responsive width
                maxWidth: '600px', // Optional: Set a max width for larger screens
            }}
        >
            <form onSubmit={handleSubmit(handleLogin)} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Typography variant="h5" sx={{ marginBottom: '20px', textAlign: 'center', color: '#3f51b5' }}>
                    Login Form
                </Typography>

                <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Username is required" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Username"
                            variant="outlined"
                            error={!!errors.username}
                            helperText={errors.username ? String(errors.username.message) : ""}
                            margin="normal"
                            fullWidth
                        />
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be at least 6 characters" }
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Password"
                            type="password"
                            variant="outlined"
                            error={!!errors.password}
                            helperText={errors.password ? String(errors.password.message) : ""}
                            margin="normal"
                            fullWidth
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '20px' }}>
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default Login;
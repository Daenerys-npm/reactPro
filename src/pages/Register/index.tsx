import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, UseDispatch } from 'react-redux';
import { addUser } from '../../redux/slices/usersSlice';

const Register = () => {
    const { control, handleSubmit,getValues, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleRegister = (data: any) => {
        console.log("Registration Successful:", data);
        dispatch(addUser(data));
        navigate("/Login");

        // Add your registration logic here
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
                height: '450px', // Increased height for additional fields
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#ffffff',
                width: { xs: '90%', sm: '400px' }, // Responsive width
                maxWidth: '600px', // Optional: Set a max width for larger screens
            }}
        >
            <form onSubmit={handleSubmit(handleRegister)} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Typography variant="h5" sx={{ marginBottom: '20px', textAlign: 'center', color: '#3f51b5' }}>
                    Register
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

                <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "Please confirm your password",
                        validate: (value) => {
                            const { password } = getValues();
                            return value === password || "Passwords do not match";
                        }
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword ? String(errors.confirmPassword.message) : ""}
                            margin="normal"
                            fullWidth
                        />
                    )}
                />


                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '20px' }}>
                    Register
                </Button>
            </form>
        </Box>
    );
};

export default Register;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";

const Login: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(login({ username }));
        if(username === "abc"){
      navigate("/User");
        }
    };

    return (
        <form onSubmit={handleSubmit(handleLogin)} style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: 'auto' }}>
        <h2>Login Form</h2>

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
                    error={!!errors.username} // Check if there's an error
                    helperText={errors.username ? String(errors.username.message) : ""} // Convert to string
                    margin="normal"
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
                    error={!!errors.password} // Check if there's an error
                    helperText={errors.password ? String(errors.password.message) : ""} // Convert to string
                    margin="normal"
                />
            )}
        />

        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
            Login
        </Button>
    </form>
    );
};

export default Login;
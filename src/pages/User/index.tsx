import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { RootState } from '../../redux/store';
import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  MenuItem,
  IconButton,
} from '@mui/material';
//import CloseIcon from '@mui/icons-material';
import UserProducts from '../../components/UserProducts';
import { useForm, Controller } from 'react-hook-form';
import NewProduct from '../../components/NewProduct';

const User: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const [open, setOpen] = useState(false);

  const handleLogout = () => dispatch(logout());
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: '',
      material: '',
      size: '',
      cost: '',
      description: '',
      deliveryType: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('New Product:', data);
    handleClose();
    reset();
  };

  return (
    <Box sx={{ p: 4 }}>
      {user ? (
        <>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography variant="h4" fontWeight="bold">
              Welcome, {user.username}
            </Typography>
            <Button variant="outlined" onClick={handleLogout}>
              Logout
            </Button>
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            sx={{ mb: 4 }}
          >
            Add New Product
          </Button>

          <UserProducts />

          {/* Modal Form */}
          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 24,
                p: 3,
              }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6">Add New Product</Typography>
                <IconButton onClick={handleClose}>
            
                </IconButton>
              </Box>

             <NewProduct handleClose={function (): void {
                              throw new Error('Function not implemented.');
                          } }/>
            </Box>
          </Modal>
        </>
      ) : (
        <Typography>Please log in to see your user information.</Typography>
      )}
    </Box>
  );
};

export default User;
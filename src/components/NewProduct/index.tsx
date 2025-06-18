import React from 'react';
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  IconButton,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
//import CloseIcon from '@mui/icons-material/Close';

type ProductFormData = {
  title: string;
  material: string;
  size: string;
  cost: string;
  description: string;
  deliveryType: string;
};

type NewProductProps = {
 // onSubmit: (data: ProductFormData) => void;
  handleClose: () => void;
};

const NewProduct: React.FC<NewProductProps> = ({ handleClose }) => {
  const { handleSubmit, control, reset } = useForm<ProductFormData>({
    defaultValues: {
      title: '',
      material: '',
      size: '',
      cost: '',
      description: '',
      deliveryType: '',
    },
  });

  const submitHandler = (data: ProductFormData) => {
    //onSubmit(data);
    console.log(data);
    reset();
  };

  return (
    <Box sx={{width: '500px',
      margin:"5% auto",
        maxHeight: '80vh',
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 4,
        p: 3,
        overflowY: 'auto',}}>
      <Box display="flex" justifyContent="space-between" marginLeft="90%" mb={2}>
        <IconButton onClick={handleClose}>
        <div>X</div>
        </IconButton>
      </Box>

      <form onSubmit={handleSubmit(submitHandler)}>
        <Controller
          name="title"
          control={control}
          rules={{ required: 'Title required' }}
          render={({ field }) => (
            <TextField fullWidth label="Title" margin="normal" {...field} />
          )}
        />

        <Controller
          name="material"
          control={control}
          render={({ field }) => (
            <TextField select fullWidth label="Material" margin="normal" {...field}>
              <MenuItem value="print">Print</MenuItem>
              <MenuItem value="canvas">Canvas</MenuItem>
              <MenuItem value="artifact">Artifact</MenuItem>
            </TextField>
          )}
        />

        <Controller
          name="size"
          control={control}
          render={({ field }) => (
            <TextField fullWidth label="Size" margin="normal" {...field} />
          )}
        />

        <Controller
          name="cost"
          control={control}
          render={({ field }) => (
            <TextField fullWidth label="Cost (₹)" margin="normal" {...field} />
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Description"
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          name="deliveryType"
          control={control}
          render={({ field }) => (
            <TextField select fullWidth label="Delivery Type" margin="normal" {...field}>
              <MenuItem value="self">Self</MenuItem>
              <MenuItem value="post">Post</MenuItem>
            </TextField>
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default NewProduct;
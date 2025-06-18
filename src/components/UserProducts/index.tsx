import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import { fetchUserProductsRequest, Product } from '../../redux/slices/userProSlice';
import { RootState } from '../../redux/store';

export default function UserProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.userPro.products);

  useEffect(() => {
    dispatch(fetchUserProductsRequest());
  }, [dispatch]);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center">
        My Products
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: 3,
          mt: 2,
          flexWrap: 'wrap',
        }}
      >
        {products.map((product, index) => (
          <Card
            key={index}
            sx={{
              width: 300,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <CardMedia component="img" height="180" image={product.image} alt={product.title} />
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" fontWeight="bold">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                {product.description}
              </Typography>
              <Typography variant="body2" mt={1}>
                <strong>Size:</strong> {product.size}
              </Typography>
              <Typography variant="body2" mt={1}>
                <strong>Cost:</strong> {product.cost}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Button variant="outlined" fullWidth sx={{ mt: 2, textTransform: 'none' }}>
                Edit Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
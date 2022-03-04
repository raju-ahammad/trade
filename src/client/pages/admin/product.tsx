import React from 'react'
import { Container, Box, Grid, Typography, Button, TextField } from '@mui/material'
import { useGetProductsQuery } from '../../Store/product/Product'
import ProductGrid from '../../components/Admin/ProductGrid'
import EditIcon from '@mui/icons-material/Edit';
const product = () => {

   const { data, isLoading, error } = useGetProductsQuery(12)
   console.log(data);
   
  return (
   <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 0' }}>
         <Typography sx={{ fontSize: '34px', fontWeight: '700' }} >PRODUCTS</Typography>
         <Button variant="contained"  color='error'>UPLOAD PRODUCTS</Button>
      </Box>
      <Box
         sx={{
         width: '100%',
         maxWidth: '100%',
         marginBottom: '1rem'
         }}
         >
         <TextField fullWidth label="Filter Products" id="fullWidth" />
      </Box>
      <Box>
      <Box sx={{ padding: '1rem' }}>
          <Grid container spacing={0}>
               <Grid item xs={4}><Typography>Product</Typography></Grid>
                <Grid item xs={2}><Typography>Platform</Typography></Grid>
                <Grid item xs={2}><Typography>Store Credit</Typography></Grid>
                <Grid item xs={1}><Typography>Price</Typography></Grid>
                <Grid item xs={2}><Typography>Inventory</Typography></Grid>
                <Grid item xs={1}><Typography><EditIcon/></Typography></Grid>
          </Grid>
          {
             data?.map((item: any)=>(
                <ProductGrid product={item}/>
             ))
          }
      </Box>
      <Box>

      </Box>
       
      </Box>
      
 </Container>
  )
}

export default product
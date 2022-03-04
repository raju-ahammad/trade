import React from 'react'
import { useGetProductsQuery } from '../Store/product/Product'
import { Container, Box, Grid, Paper, styled, Typography } from '@mui/material'
import ProductItem from '../components/ProductItem'
import CartItem from '../components/Footer/CartItem'

type Props = {}

const cart = (props: Props) => {
  const { data, isLoading, error } = useGetProductsQuery(4)
  return (
    <Box>
      <Container maxWidth='lg'>
        <Box>
          <Typography variant="h2" sx={{ fontSize: '32px', fontWeight: '600', padding: '20px 0'}}>Featured Trade-in</Typography>  
        </Box>
        <Box>
          <Grid container spacing={2}>
            {
              isLoading ? 'loading....': 
              data?.map((item:any) => (
                <Grid item md={3} xs={6} key={item.id}>
                  <ProductItem product={item} />
                </Grid>
              ))
            }
            
          </Grid>
        </Box>
        <Box marginTop={'1rem 0'}>
          <CartItem/>
        </Box>
      </Container>
    </Box>
  )
}

export default cart
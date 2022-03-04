import React from 'react'
import { Container, Box, Grid, Paper, styled, Typography, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Image from 'next/image';
import { useTypedSeletors } from '../../hooks/useTypedSeletors'
import { useActions } from '../../hooks/useActions';
import Link from 'next/link'

type Props = {}

const CartItem = (props: Props) => {
  const { removeItem } = useActions()
  const { cart } = useTypedSeletors(state=>state)
  console.log("cart",cart);

  
  return (
    <Container maxWidth='lg'>
      <Box sx={{ padding: '1rem 0', marginTop: '1rem' }}>
        <Box className='__cartItem__header' sx={{ background:'#F3F3F3', padding: '1rem' }}>
          <Grid container spacing={0}>
            <Grid item xs={5}><Typography>Product</Typography></Grid>
            <Grid item xs={7}>
              <Grid container spacing={3}>
                <Grid item xs={4}><Typography>Store Credit</Typography></Grid>
                <Grid item xs={4}><Typography>Cash (RM)</Typography></Grid>
                <Grid item xs={4}><Typography>Quantity</Typography></Grid>
              </Grid>
            </Grid>

          </Grid>
        </Box>
        <Box sx={{ padding: '1rem' }}>
          {
            cart.length < 1 ?
            "Cart is Empty":
            cart.map(product=> (
              <Grid container alignItems={'center'} spacing={0} key={product.id}>
              <Grid  item xs={12} md={5}>
                <Grid container alignItems={'center'} spacing={0}>
                  <Grid item xs={1} md={2}>
                    <CloseIcon onClick={ ()=> removeItem({id: product.id})} />
                  </Grid>
                  <Grid item xs={3} md={4}>
                    <Image src={ product.image } width={120} height={120} objectFit='cover' />
                  </Grid>
                  <Grid className='__cartproduct__title' item xs={8} md={6}>
                    <Typography>{product.title}</Typography>
                    <Typography>Base price: RM 229.00</Typography>

                  </Grid>
                </Grid>
              </Grid>
            <Grid item xs={12} md={7}>
              <Grid container spacing={3}>
                <Grid item xs={4}><Typography><Button variant="outlined" startIcon={<CheckCircleOutlineIcon />}> 1290</Button> </Typography></Grid>
                <Grid item xs={4}><Typography><Button variant="outlined" startIcon={<CheckCircleOutlineIcon />}> 1290</Button> </Typography></Grid>
                <Grid item xs={4}><Typography><Button variant="outlined" startIcon={<CheckCircleOutlineIcon />}> 1290</Button> </Typography></Grid>
              </Grid>
            </Grid>

          </Grid>
            ))
            
          }
          
        </Box>
        <Box className='__cartItem__header' sx={{ background:'#F3F3F3', padding: '1rem' }}>
          <Grid container spacing={0}>
            <Grid item xs={5}><Typography>Subtotal :</Typography></Grid>
            <Grid item xs={7}>
              <Grid container spacing={3}>
                <Grid item xs={4}><Typography color={'#d32f2f'}>2560</Typography></Grid>
                <Grid item xs={4}><Typography>Cash (RM)</Typography></Grid>
                <Grid item xs={4}><Typography>Quantity</Typography></Grid>
              </Grid>
            </Grid>

          </Grid>
        </Box>
        <Box className='__cartItem__header' sx={{  padding: '2rem 1rem' }}>
          <Grid container spacing={0}>
            <Grid item xs={7}><Typography>Subtotal :</Typography></Grid>
            <Grid item xs={5}>
              <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={9}><Typography>Quantity</Typography></Grid>
              </Grid>
            </Grid>

          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default CartItem
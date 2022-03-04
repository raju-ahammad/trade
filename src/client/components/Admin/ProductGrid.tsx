import React from 'react'
import { Container, Box, Grid, Paper, styled, Typography, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Image from 'next/image';
import EditIcon from '@mui/icons-material/Edit';

import { IProduct } from '../../Store/product/productTypes';
type Props = {}

const ProductGrid: React.FC<{product: IProduct}> = ({ product }) => {
  
  
  return (
    
        <Box sx={{ padding: '1rem', margin:'1rem 0', borderBottom:'1px solid rgba(0,0,0,0.2)' }} key={product.id}>
           <Grid container >
                  <Grid item xs={4}>
                     <Box display={'flex'}>
                        <Image src={ product.image } width={70} height={70} objectFit='cover' />
                        <Typography marginLeft={'10px'} marginRight={'10px'} >{ product.title }</Typography>
                     </Box>
                  </Grid>
                  <Grid item xs={2}><Typography>ps5</Typography></Grid>
                  <Grid item xs={2}><Typography>2290</Typography></Grid>
                  <Grid item xs={1}><Typography>{ product.price }</Typography></Grid>
                  <Grid item xs={2}><Typography>100</Typography></Grid>
                  <Grid item xs={1}><Typography><EditIcon/></Typography></Grid>
            </Grid>
            
        </Box>
  )
}

export default ProductGrid
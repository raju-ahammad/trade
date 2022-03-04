import * as React from 'react';
import { Box, Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Avatar, IconButton, Grid, Fab } from '@mui/material'

import { red } from '@mui/material/colors'
import AddIcon from '@mui/icons-material/Add'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Image from 'next/image'
import {useActions} from '../hooks/useActions'
import { useTypedSeletors } from '../hooks/useTypedSeletors'
import { IProduct } from '../Store/product/productTypes';

type Props = {}

const ProductItem: React.FC<{product: IProduct}> = ({ product }) => {

  const { addItem } = useActions()
  const { cart } = useTypedSeletors(state=>state)

  const isCartExist = cart.some(p=>p.id===product.id)

  const handleCartClick = () => {
    addItem(product)
  }

  const color = red[500]

  return (
    <Card sx={{ boxShadow: "0px 0px 0px -1px rgb(0 0 0 / 10%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)" }}>
      <CardMedia className="card__media" sx={{ height: 200, width: '100%', padding: '20px' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%', textAlign: 'center' }}>
          <Image src={product.image} width={180} height={180} objectFit='cover' />
        </div>
      </CardMedia>
      <CardContent>
        <Typography  variant="body2" color="text.secondary" sx={{ fontSize: '14px', fontWeight: 400 }}>
          {product.title }
        </Typography>
        <Typography sx={{ padding: '10px 0', fontSize: '13px', fontWeight: 400 }}>Platform - PS5</Typography>
        <Box>
          <Grid container>
            <Grid item xs={6}>
              <Typography sx={{ fontWeight: 700, fontSize: '14px' }}>RM 209.90</Typography>
              <Typography sx={{ color:"#DD3333", fontWeight: 700, fontSize: '14px' }}>2090 Cr.</Typography>
            </Grid>
            <Grid item xs={5} textAlign='right'>
              <Fab onClick={handleCartClick} color='error' size="small" aria-label="add">
                <AddIcon  />
              </Fab>
            </Grid>

          </Grid>
          
        </Box>
      </CardContent>
      
    </Card>
  )
}

export default ProductItem



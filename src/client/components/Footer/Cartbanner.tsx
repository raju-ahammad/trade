import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTypedSeletors } from '../../hooks/useTypedSeletors'
type Props = {}

const Cartbanner = (props: Props) => {
   const { cart } = useTypedSeletors(state=>state)

  return (
    <Box sx={{ position: 'fixed', bottom: 0, background: '#fff', width:'100%', padding: '1rem 0'}} >
       <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
             <Box>
                <Grid container justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
                   <Grid item xs={6}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{background: '#d32f2f', borderRadius: '50%', height: '50px',  width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                           <ShoppingCartIcon sx={{ color: '#fff' }}/>
                           <span style={{ color: '#fff' }}>{cart.length}</span>
                        </Box>
                        <Typography sx={{ marginLeft: '1rem'}}> No Pruduct Added</Typography>
                     </Box>
                   </Grid>
                   <Grid item xs={6}>
                      <KeyboardArrowDownIcon sx={{ borderRadius: '50%', height: '30px',  width: '30px', background: '#d32f2f', color:'#fff'}}/>
                   </Grid>
                </Grid>
             </Box>
          </Grid>
          <Grid item xs={3}></Grid>
       </Grid>
    </Box>
  )
}

export default Cartbanner
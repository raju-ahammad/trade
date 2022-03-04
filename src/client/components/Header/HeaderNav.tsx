import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const HeaderNav = (props: Props) => {
  return (
    <Box className='__header__nav' sx={{ width: '100%', backgroundColor: '#DD3333' }}>
      <Container maxWidth="lg">
        <Box className='topnav__text'>
          <Typography textAlign={'center'} color={'#fff'}>Search for game available to trade-in</Typography>
        </Box>
        <Box>
          <Grid container sx={{ justifyContent:'center' }} spacing={2}>
            <Grid item xs={8} md={6}>
              <TextField className='SearchFrom' sx={{ backgroundColor: '#fff' }} fullWidth label="search" id="fullWidth"/>
            </Grid>
            <Grid className='search__grid'  item md={2} xs={0}><Button className='__search__btn' variant="contained" size="large" sx={{ background: '#fff', color: '#000' }}>Search</Button></Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HeaderNav
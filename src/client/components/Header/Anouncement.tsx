import React from 'react'
import { Container, Box, Grid, Paper, styled, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Anouncement = (props: Props) => {
  return (
    <Box sx={{ background: '#DD3333',  }}>
      <Container maxWidth="lg">
        <Grid container sx={{ height: '100%', alignItems: 'center' }}>
          <Grid  item xs={4} md={8}><Link href={'/'}><a><Image src='/navicon.png' width={23} height={26} objectFit='cover' /></a></Link> </Grid>
          <Grid item xs={8} md={4}>
            <Grid container textAlign={'right'} >
              <Grid item xs={6}>
                <Typography sx={{ color: '#fff', fontWeight: '400', fontSize: '13px' }}>Customer Service</Typography>
              </Grid>
              <Grid item  xs={6}>
                <Typography sx={{ color: '#fff', fontWeight: '400', fontSize: '13px' }}>016-2991681</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Anouncement
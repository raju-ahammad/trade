import React from 'react'
import { NextPage } from 'next'

import { Container, Box, Grid, Paper, styled, Typography } from '@mui/material'
import FilterButton from '../components/FilterButton'
import ProductItem from '../components/ProductItem'
import { fontWeight } from '@mui/system'
import { useGetProductsQuery } from '../Store/product/Product'
import CardDrawer from '../components/Footer/CardDrawer'


const Home:NextPage<any> = props => {

  const { data, isLoading, error } = useGetProductsQuery(12)

  const Item = styled(Paper)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'left'
  }));

  return (
    <>
    <CardDrawer/>
    <Container maxWidth="lg">
      
      <Box sx={{ flexGrow: 1 }}>
      <FilterButton/>
      <Typography variant="h2" sx={{ fontSize: '32px', fontWeight: '600', padding: '20px 0'}}>Featured Trade-in</Typography>  
        
        {
          isLoading ? 'Loading...': error ? 'somthings went wrong': (
            
            <Grid container spacing={2}>
              {
                data?.map((item: any)=>(
                  <Grid item md={3} sm={4} xs={6} key={item.id}>
                    <Item>
                      <ProductItem product={item} />
                    </Item>
                  </Grid>
                ) )
              }
            </Grid>
            
          )
        }
        
       <Typography variant="h2" sx={{ fontSize: '32px', fontWeight: '600', padding: '20px 0'}}>New In</Typography>  
       {
          isLoading ? 'Loading...': error ? 'somthings went wrong': (
            
            <Grid container spacing={2} sx={{ marginBottom: '3rem'}}>
              {
                data?.map((item: any)=>(
                  <Grid item md={3} sm={4} xs={6} key={item.id}>
                    <Item>
                      <ProductItem product={item} />
                    </Item>
                  </Grid>
                ) )
              }
            </Grid>
            
          )
        }
      </Box>
    </Container>
    </>
  )
}

Home.getInitialProps = ({ query }) => {
  return {
    data: `${JSON.stringify(query)}`
  }
}

export default Home;
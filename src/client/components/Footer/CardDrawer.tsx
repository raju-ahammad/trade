import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { Box, Grid, Typography } from '@mui/material'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTypedSeletors } from '../../hooks/useTypedSeletors'
import CartItem from './CartItem'

const drawerBleeding = 56;

interface Props {
  
  window?: () => Window;
}

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

export default function CardDrawer(props: Props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const [isZindex, setisZindex] = React.useState(false);

  

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    
    if (open === false) {
      setisZindex(true)
    }else {
      setisZindex(false)
       
    }
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;
  const { cart } = useTypedSeletors(state=>state)

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <Box className={ isZindex ? 'drawer__btn': null} sx={{ textAlign: 'center', pt: 1, position: 'fixed', top: 'auto', left: 0, bottom: 0, zIndex: 1202, right: 0, background: '#fff' }}>
         
         <Grid container sx={{ background: '#fff' }}>
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={10} md={6}>
             <Box>
                <Grid container justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
                   <Grid item xs={8} md={6}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{background: '#d32f2f', borderRadius: '50%', height: '50px',  width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                           
                            <ShoppingCartIcon sx={{ color: '#fff' }}/>
                            <span style={{ color: '#fff' }}>{cart.length}</span>
                          
                        </Box>
                        <Typography sx={{ marginLeft: '1rem'}}> 
                        {
                          cart.length > 0 ? 'Product Added' : 'No Pruduct Added'
                        }
                        </Typography>
                     </Box>
                   </Grid>
                   <Grid item xs={4} md={6}>
                      
                      <Button onClick={toggleDrawer(true)}><KeyboardArrowDownIcon sx={{ borderRadius: '50%', height: '30px',  width: '30px', background: '#d32f2f', color:'#fff'}}/></Button>
                   </Grid>
                </Grid>
             </Box>
          </Grid>
          <Grid item xs={1} md={3}></Grid>
       </Grid>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Typography sx={{ p: 2, color: 'text.secondary' }}>Your Trade-in Cart</Typography>
            <Button onClick={toggleDrawer(false)}><KeyboardArrowUpIcon sx={{ borderRadius: '50%', height: '30px',  width: '30px', background: '#d32f2f', color:'#fff'}}/></Button>
          </Box>

        </StyledBox>
        
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
           
          <Box>
             <CartItem/>
          </Box>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

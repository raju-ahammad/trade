import * as React from 'react';
import Stack from '@mui/material/Stack';
import ButtonUnstyled, {
  ButtonUnstyledProps,
  buttonUnstyledClasses,
} from '@mui/base/ButtonUnstyled';
import { Box, styled } from '@mui/system';
import { Container, Grid } from '@mui/material';

const blue = {
  500: '#FFF100',
  600: '#FcF500',
  700: '#FFD500',
};

const CustomButtonRoot = styled('span')`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 20px;
  background-color: ${blue[500]};
  padding: 14px 30px;
  border-radius: 30px;
  color: #000;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  width: 200px;
  max-width: 200px;
  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function CustomButton(props: ButtonUnstyledProps) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

type Props = {}

const FilterButton = (props: Props) => {
  return (
    <Box sx={{ padding: '30px 0', display: 'flex', alignItems: 'center', justifyContent:'center' }}>
      
      <Box className="filter__btn" sx={{ padding: '1rem' , margin: '0 1rem', background: '#fbed1c', textAlign: 'center', width: '200px' ,borderRadius: '25px', fontWeight: '700' }}>NINTENDO</Box>
      <Box className="filter__btn" sx={{ padding: '1rem' , margin: '0 1rem', background: '#fbed1c', textAlign: 'center', borderRadius: '25px', width: '200px',fontWeight: '700' }}>PS5</Box>
      <Box className="filter__btn" sx={{ padding: '1rem' , margin: '0 1rem', background: '#fbed1c', textAlign: 'center', borderRadius: '25px',width: '200px',fontWeight: '700' }}>CONSOLES</Box>
      
    </Box>
  )
}

export default FilterButton

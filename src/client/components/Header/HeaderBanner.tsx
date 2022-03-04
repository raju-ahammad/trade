import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type Props = {}

const HeaderBanner = (props: Props) => {
  return (
    <Box sx={{ position: "relative", width: "100%", height: '100px', background: '#FBED1D' }}>
      <Image src='/banner.png' layout='fill' objectFit='contain' />
    </Box>
  )
}

export default HeaderBanner
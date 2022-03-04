import React from 'react'
import PropTypes from 'prop-types'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'

import createEmotionCache from '../utils/createEmotionCache'
import theme from '../styles/theme/lightTheme'
import '../styles/global.css'
import Header from '../components/Header'

import { wrapper } from '../Store';
const clientSideEmotionCache = createEmotionCache()

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <Header/>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default wrapper.withRedux(App)

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired
}
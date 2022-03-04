import React from 'react'
import Anouncement from './Anouncement'
import HeaderBanner from './HeaderBanner'
import HeaderNav from './HeaderNav'
type Props = {}

const Header = (props: Props) => {
  return (
    <>
    <Anouncement/>
    <HeaderBanner/>
    <HeaderNav/>
    </>
  )
}

export default Header
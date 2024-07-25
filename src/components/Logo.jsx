import React from 'react'
import lightLogo from './logos/white-logo.png'
import darkLogo from './logos/black-logo.png'
import useTheme from '../contextApi/theme'



function Logo({width= "100px"}) {
  const {themeMode} =useTheme()
  const logo= themeMode === 'dark' ? darkLogo : lightLogo

  return (
    
      <img alt='logo' style={{width}} className='rounded-full' src={logo}/>
     
    
  )
}

export default Logo
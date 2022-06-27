import { Box } from '@mui/material'
import React from 'react'
import Info from './Info'
import MenuComponent from './menu'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box bgcolor="#00126a" height="100vh" display="flex">
      <Box
        bgcolor="#000c46"
        display={{ xs: 'none', lg: 'flex' }}
        width="calc(((100% - 220px) / 4) + 40px)"
        paddingRight="20px"
        paddingLeft="32px"
        paddingY="1.5rem"
        flexDirection="column"
      >
        <Info />
      </Box>
      <Box
        bgcolor="#00188"
        height="calc(100%-3rem)"
        display="flex"
        flexDirection="column"
        marginY="1.5rem"
        width={{ xs: '100%', lg: 'calc(((100% - 220px) * 0.75) + 180px)' }}
      >
        <Box
          bgcolor="#011eb1"
          height="3rem"
          marginBottom={3}
          paddingRight={{ xs: '32px', lg: '32px' }}
          paddingY="1rem"
          display="flex"
          justifyContent="flex-end"
        >
          <MenuComponent />
        </Box>
        <Box
          bgcolor="#0125d4"
          flexGrow={1}
          marginRight={{ xs: '32px', lg: '32px' }}
          marginLeft={{ xs: '32px', lg: '0px' }}
          paddingLeft="20px"
          justifyItems="center"
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default Layout

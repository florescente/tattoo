import { Box } from '@mui/material'
import { Router } from 'next/router'
import React from 'react'
import ScrollProps from '../helpers/scroll'
import About from './about'
import Info from './Info'
import MenuComponent from './menu'
import Speed from './speedial'

function Layout({
  children,
  router,
}: {
  children: React.ReactNode
  router: Router
}) {
  return (
    <>
      <Box height="100vh" display="flex" {...ScrollProps}>
        <Box
          component="aside"
          bgcolor="#151616"
          display={{ xs: 'none', lg: 'flex' }}
          width="calc(((100% - 220px) / 4) + 40px)"
          height="100%"
          paddingRight="20px"
          paddingLeft="32px"
          paddingY="1.5rem"
          flexDirection="column"
          {...ScrollProps}
        >
          <Info />
        </Box>
        <Box
          height="calc(100%-3rem)"
          display="flex"
          flexDirection="column"
          marginY="1.5rem"
          width={{ xs: '100%', lg: 'calc(((100% - 220px) * 0.75) + 180px)' }}
          sx={{
            overflowY: 'hidden',
            overflowX: 'hidden',
          }}
        >
          <Box
            component="header"
            bgcolor="#202020"
            height="3rem"
            marginBottom={3}
            paddingRight={{ xs: '32px', lg: '32px' }}
            paddingLeft="32px"
            paddingY="1rem"
            display="flex"
            justifyContent={{ xs: 'space-between', lg: 'flex-end' }}
            flexDirection={{ xs: 'row-reverse', lg: 'row' }}
          >
            <Box alignItems="center" display={{ xs: 'flex', lg: 'none' }}>
              <About />
            </Box>
            <MenuComponent router={router} />
          </Box>
          {children}
        </Box>
      </Box>
      <Speed />
    </>
  )
}

export default Layout

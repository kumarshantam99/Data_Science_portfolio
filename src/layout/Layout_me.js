import React from 'react'

import Footer from '../components/Footer/Footer'
import Header_me from '../components/Header/Header_me'
import { Container } from './LayoutStyles'

export const Layout_me = ({children}) => {
  return (
    <Container>
     <Header_me/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}

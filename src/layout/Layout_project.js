import React from 'react'

import Footer from '../components/Footer/Footer'
import Header_p from '../components/Header/Header_p'
import { Container } from './LayoutStyles'

export const Layout_project = ({children}) => {
  return (
    
    <Container>
     <Header_p/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
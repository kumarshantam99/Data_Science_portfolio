import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiCircuitry } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, Span, SocialIcons } from './HeaderStyles';

const Header_me = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display:'flex',alignItems:'center',color:'white', marginBottom:'20px'}}>
          <GiCircuitry size='3rem'style={{marginRight:'10px'}}/>  <Span>Kumar Shantam</Span>
        </a>

      </Link>
    </Div1>
    
    <Div3>
      <SocialIcons href="https://github.com/kumarshantam99">
        <AiFillGithub size='3rem'>

        </AiFillGithub>

      </SocialIcons>
      <SocialIcons href="www.linkedin.com/in/kumar-shantam">
        <AiFillLinkedin size='3rem'>
          
        </AiFillLinkedin>

      </SocialIcons>
    </Div3>
  </Container>
);

export default Header_me;
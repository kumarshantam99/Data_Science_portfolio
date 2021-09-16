import React from 'react';
import Router from 'next/router';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Data Science portfolio
      </SectionTitle>
      <SectionText>
        
      Contemplative coder and Analyst. Inspired by tough problems and a 'Never say Die!' attitude.

        
      </SectionText>
      <Button onClick={() => Router.push('/me')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
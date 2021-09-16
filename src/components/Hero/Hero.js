import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My personal portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At praesentium, enim nostrum tenetur sit esse excepturi illo incidunt eligendi voluptates reprehenderit architecto veniam consectetur eaque sapiente numquam tempora magnam a?
      </SectionText>
      <Button onClick={()=>window.location='https://google.com/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
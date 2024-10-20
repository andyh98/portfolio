import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <p>Hello!</p>
        I'm Andy
      </SectionTitle>
      <SectionText>
      A Software Engineer who is passionate about helping people live better lives through technology
      </SectionText>
      
      <a href="https://drive.google.com/file/d/1WBQGVJFu3Q4aRzt7pIjoV_G_d-E5GSZV/view?usp=sharing"><Button>View CV</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;

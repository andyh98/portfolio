import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I am a Software Engineer who is passionate about helping people live better lives through technology
      </SectionText>
      <Button href = "#about">Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;
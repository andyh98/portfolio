import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3.9, text: 'cGPA'},
  { number: 5, text: 'years as Engineering tutor with 30+ 5-star student reviews', },
  { number: 2, text: 'internships with industry leaders AMD & AWS', },
  { number: 1, text: 'Culturally immersive year abroad in Japan', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Accomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index} >
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

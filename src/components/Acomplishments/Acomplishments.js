import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "3.9", text: 'cGPA'},
  { number: "5+", text: 'Years as Engineering tutor with 30+ 5-star student reviews', },
  { number: "15+", text: 'Months of internship experience with industry leaders AMD & AWS', },
  { number: "6", text: 'Honors & Awards for academic excellence, leadership and community work', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Accomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index} >
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

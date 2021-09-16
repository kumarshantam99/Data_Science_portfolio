import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I have worked on this project asasd</SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>Experience with React.JS</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>Experience with Node.JS and databases</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3rem' />
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>Experience with Model development and deployment</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

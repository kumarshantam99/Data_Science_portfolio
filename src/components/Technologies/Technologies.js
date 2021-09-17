import React from 'react';
import { DiFirebase, DiReact, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle style={{height:'1.2em'}}>Technologies</SectionTitle>
    <br />
    <SectionText>I have worked on this project asasd</SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <br />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>Experience with React.JS, Next.JS (this website)</ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <DiPython size='3rem' />
        <br />
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>Experience with Model development, testing and deployment</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <br />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>Experience with Node.JS, MYSQL and NOSQL databases</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

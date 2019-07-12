import React from 'react';
import styled from 'styled-components';
import { Typo } from './Typo.component';

type Props = { text: string };
const Paragraph: React.FC<Props> = ({ text }) => (
  <Container>
    <P>{text}</P>
  </Container>
);

const Container = styled.div``;

const P = Typo ('body1')`
  font-size: 1.4em;
  line-height: 1.5em;
  margin: 0 0 .8em;
`;

export default Paragraph;

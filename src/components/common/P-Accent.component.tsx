import React from 'react';
import styled from 'styled-components';
import { Typo } from './Typo.component';

type Props = { text: string };
const PAccent: React.FC<Props> = ({ text }) => (
  <Container>
    <P>{text}</P>
  </Container>
);

const Container = styled.div`
  margin: 1.5em 0 0;
  background: rgba(0,0,0,.8);
  margin: 1.5em 0 0;
  box-shadow: 2px 2px 5px rgba(0,0,0,.2);
  padding: 30px 4.166666666667%;
`;

const P = Typo ('body1')`
  line-height: 1.9em;
  font-size: .9em;
  line-height: 1.5em;
  margin: 0 0 .8em;
  color: rgba(255,255,255,.85) !important;
`;

export default PAccent;

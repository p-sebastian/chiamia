import React from 'react';
import styled from 'styled-components';
import { Typo } from './Typo.component';

type Props = { src: string, alt: string, caption: string };
const JAccent: React.FC<Props> = ({ src, alt, caption }) => (
  <Container>
    <Image src={src} alt={alt} />
    <Caption>{caption}</Caption>
  </Container>
);

const Container = styled.div`
  margin: 2em -4.166666666667%;
  padding: 35px 4.166666666667% 30px;
  background: #fff;
  max-width: 100%;
`;
const Image = styled.img`
  max-width: 100%;
`;
const Caption = Typo ('caption')`
  display: flex;
  flex: 1;
  margin: 20px 0 0 !important;
  padding: 13px 0 0;
  border-top: 1px solid rgba(0,0,0,.15);
  line-height: 1.5em;
  font-size: 0.9em;
  color: rgba(0,0,0,.6) !important;
`;

export default JAccent;

import React from 'react';
import styled from 'styled-components';
import { Typo } from './Typo.component';

type Props = { title: string, subtitle: string, category: string };
const CTitle: React.FC<Props> = ({ title, subtitle, category }) => (
  <Container>
    <Top>
      <Subtitle1>{subtitle}</Subtitle1>
      <Category>{category}</Category>
    </Top>
    <Title>{title}</Title>
  </Container>
);


const Container = styled.div`
  /* gives a little more space below */
  border-bottom: 1px solid transparent;
`;
const Top = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(57, 67, 60);
  margin: 0 0 10px;
`;

const Title = Typo ('h1')`
  color: rgb(57, 67, 60) !important;
`;

const Subtitle1 = Typo ('subtitle1')`
  justify-content: flex-start;
  flex: 1;
  z-index: 1;
  line-height: 1.5em;
  margin: 0 0 10px !important;
  color: rgb(57, 67, 60) !important;
`;
const Category = Typo ('h3')`
  justify-content: flex-end;
  z-index: 1;
  line-height: 1.5em;
  margin: 0 0 10px !important;
  color: rgb(57, 67, 60) !important;
`;
export default CTitle;

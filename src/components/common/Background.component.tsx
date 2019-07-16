import React from 'react';
import styled from 'styled-components';

type Props = { src: string };
const Background: React.FC<Props> = ({ src, children }) => (
  <Container src={src}>{children}</Container>
);

const Container = styled.div<Props>`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-image: url('${({ src }) => src}');
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center; 
  overflow-y: scroll;
`;

export default Background;

import React from 'react';
import styled from 'styled-components';

type Props = { src: string, alt: string };
const Jumbotron: React.FC<Props> = ({ src, alt }) => (
  <Container>
    <Image src={src} alt={alt} />
  </Container>
);

const Container = styled.div`
  margin: 10px 0 15px;
  max-width: 100%;
`;
const Image = styled.img`
  max-width: 100%;
`;

export default Jumbotron;

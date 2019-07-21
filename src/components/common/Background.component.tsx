import React from 'react';
import styled from 'styled-components';

type Props = { src: string, position?: 'right' | 'left', blur?: number };
const Background: React.FC<Props> = ({ src, children, position = 'left', blur = 10 }) => (
  <Container src={src}>
    <Frosted position={position} blur={blur}>{children}</Frosted>
  </Container>
);

const Container = styled.div<Props>`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-image: url('${({ src }) => src}');
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;
  background-attachment: fixed;
  overflow-y: scroll;
`;

const Frosted = styled.div<{ position: string, blur: number }>`
  width: 50vw;
  float: ${({ position }) => position};
  height: inherit;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);
  position: relative;
  background: inherit;
  overflow: hidden;
  /* z index makes children show up */
  z-index: 1;
  &:before {
    content: "";
    background: inherit;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    filter: blur(${({ blur }) => blur}px);
    /* extends excess blur to be cut by above overflow: hidden*/
    margin: -20px;
    z-index: -1;
  }
`;

export default Background;

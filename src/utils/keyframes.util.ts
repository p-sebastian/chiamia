import { keyframes } from 'styled-components';

export const zoomAnimate = (fromTransform: string, toTransform: string) => keyframes`
  from {
    transform: ${fromTransform};
  }

  to {
    transform: ${toTransform};
  }
`;

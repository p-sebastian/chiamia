import { keyframes } from 'styled-components';

export const zoomAnimate = (fromTransform: string, toTransform: string) => keyframes`
  0% {
    transform: ${fromTransform};
  }

  /* 30% {
    transform: ${fromTransform};
  } */

  100% {
    transform: ${toTransform};
  }
`;

export const opacityAnimate = (hide = false) => keyframes`
  from { opacity: ${hide ? 1 : 0}; }
  to { opacity: ${hide ? 0 : 1}; }
`;

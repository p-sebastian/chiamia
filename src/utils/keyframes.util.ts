import { keyframes } from 'styled-components';

export const zoomAnimate = (fromTransform: string, toTransform: string, invert = false) => keyframes`
  ${invert ? 100 : 0}% {
    transform: ${fromTransform};
    background-color: #CAD2E2;
    border-radius: 20px;
  }

  ${invert ? 0 : 100}% {
    transform: ${toTransform};
    background-color: #ECECEC;
    border-radius: 0px;
  }
`;

export const opacityAnimate = (hide = false) => keyframes`
  from { opacity: ${hide ? 1 : 0}; }
  to { opacity: ${hide ? 0 : 1}; }
`;

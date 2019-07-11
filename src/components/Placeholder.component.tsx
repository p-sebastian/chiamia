import React from 'react';
import styled from 'styled-components';
import { zoomAnimate } from '@utils/keyframes.util';
import { useADispatch } from '@utils/recipes.util';
import { toggleArticle } from '@actions/screen.actions';

type Dimensions<N = number> = { width: N, height: N, left: N, top: N, right: N };
type Props = {
  dimensions: Dimensions;
  transform: string[];
};
const CPlaceholder: React.FC<Props> = ({ dimensions, transform }) => {
  const { width, height } = dimensions;
  const dispatch = useADispatch ();

  if (width + height === 0) { return null; }

  return <Placeholder transform={transform} onAnimationEnd={onAnimationEnd (dispatch)} />;
};
type RDispatch = ReturnType<typeof useADispatch>;
const onAnimationEnd = (dispatch: RDispatch) => () => {
  dispatch (toggleArticle (true));
  /**
   * Must edit the body here, since I can't access the _document with redux
   * disables scrolling in the body to delegate the scroll to the article
   */
  document.body.classList.add ('noscroll');
};

type PlaceholderProps = { transform: string[] };
const Placeholder = styled.div<PlaceholderProps>`
  pointer-events: none;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  background: white;
  transform-origin: 0 0;
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.165,0.84,0.44,1);
  animation-fill-mode: forwards;
  animation-name: ${({ transform }) => zoomAnimate (transform[0], transform[1])};
`;

export default CPlaceholder;

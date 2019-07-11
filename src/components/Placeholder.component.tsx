import React from 'react';
import styled from 'styled-components';
import { zoomAnimate } from '@utils/keyframes.util';
import { useADispatch, useAShallowSelector, useASelector } from '@utils/recipes.util';
import { toggleArticle } from '@actions/screen.actions';

type Dimensions<N = number> = { width: N, height: N, left: N, top: N, right: N };
type Props = {
  dimensions: Dimensions;
};
const CPlaceholder: React.FC<Props> = ({ dimensions }) => {
  const transform = useAShallowSelector (state => state.screen.transform);
  const isExpanding = useASelector (state => state.screen.isExpanding);
  const { width, height } = dimensions;
  const dispatch = useADispatch ();

  if (width + height === 0 || !isExpanding) { return null; }

  return <Placeholder className="placeholder-animate--show" transform={transform} onAnimationEnd={onAnimationEnd (dispatch)} />;
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

type PlaceholderProps = { transform: { from: string; to: string} };
const Placeholder = styled.div<PlaceholderProps>`
  pointer-events: none;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  background-color: #ECECEC;
  transform-origin: 0 0;
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.165,0.84,0.44,1);
  animation-fill-mode: forwards;
  &.placeholder-animate--show {
    animation-name: ${({ transform }) => zoomAnimate (transform.from, transform.to)};
  }
  &.placeholder-animate--hide {
    animation-name: ${({ transform }) => zoomAnimate (transform.to, transform.from)};
  }
`;

export default CPlaceholder;

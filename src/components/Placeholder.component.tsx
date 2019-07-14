import React, { useState } from 'react';
import styled from 'styled-components';
import { zoomAnimate } from '@utils/keyframes.util';
import { useADispatch, useAShallowSelector, useASelector } from '@utils/recipes.util';
import { toggleArticle } from '@actions/screen.actions';

// @fixme on expanded placeholder resize
/**
 * When placeholder is expanded and the screen resizes
 * it will keep the previous size since it was only set once
 * onClick in useTransformer, what needs to be done its to listen
 * to changes in size of the card component, and update the dimensions.
 */
type Dimensions<N = number> = { width: N, height: N, left: N, top: N, right: N };
type Props = {
  dimensions: Dimensions;
  reset: () => void;
};
const CPlaceholder: React.FC<Props> = ({ dimensions, reset }) => {
  const [isExpanded, setIsExpanded] = useState (false);
  const transform = useAShallowSelector (state => state.screen.transform);
  const isShowing = useASelector (state => state.screen.isShowing);
  const { width, height } = dimensions;
  const dispatch = useADispatch ();

  // only exists for the clicked card
  if (width + height === 0) { return null; }
  console.info (`size: ${width + height}`);
  const classes = `placeholder-animate--${isShowing || !isExpanded ? 'show' : 'hide'}`;
  return <Placeholder
    className={classes}
    transform={transform}
    onAnimationEnd={onAnimationEnd (dispatch, isExpanded, isShowing, setIsExpanded, reset)}
  />;
};
type RDispatch = ReturnType<typeof useADispatch>;
type OnAnimationEnd =
  (dispatch: RDispatch, isExpanded: boolean, isShowing: boolean, setIsExpanded: any, reset: () => void) => () => void;
const onAnimationEnd: OnAnimationEnd = (dispatch, isExpanded, isShowing, setIsExpanded, reset) => () => {
  // first time it runs
  if (isShowing && !isExpanded) {
    /**
     * Must edit the body here, since I can't access the _document with redux
     * disables scrolling in the body to delegate the scroll to the article
     */
    document.body.classList.add ('noscroll');
    setIsExpanded (true);
    dispatch (toggleArticle (true));
  } else {
    document.body.classList.remove ('noscroll');
    setIsExpanded (false);
    reset ();
  }
};

type PlaceholderProps = { transform: { from: string; to: string} };
const Placeholder = styled.div<PlaceholderProps>`
  pointer-events: none;
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  background-color: #CAD2E2;
  transform-origin: 0 0;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.165,0.84,0.44,1);
  animation-fill-mode: forwards;
  &.placeholder-animate--show {
    animation-name: ${({ transform }) => zoomAnimate (transform.from, transform.to)};
  }
  &.placeholder-animate--hide {
    animation-name: ${({ transform }) => zoomAnimate (transform.from, transform.to, true)};
  }
`;

export default CPlaceholder;

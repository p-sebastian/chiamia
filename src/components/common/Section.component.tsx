import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { useASelector } from '@utils/recipes.util';

type Props = { isArticle?: boolean };
const CSection: React.FC<Props> = ({ children, isArticle = false }) => {
  const didAnimEnd = useASelector (state => state.screen.didAnimEnd);
  const top = useTop ();
  const classes = isArticle ? 'is-article' : '';

  return (
    <Container className={classes} {...{ didAnimEnd, top }} >
      <Grid container spacing={0}>
        {children}
      </Grid>
    </Container>
  );
};

// top is the amount that has been scrolled on screen
// so that the aricle starts correctly vertically
const useTop = () => {
  const [top, setTop] = useState (0);
  useEffect (() => {
    setTop (window.pageYOffset);
  });
  return top;
};
const Container = styled.div<{ didAnimEnd: boolean, top: number }>`
  &.is-article {
    position: absolute;
    height: ${({ didAnimEnd }) => didAnimEnd ? '100vh' : '0'};
    overflow-y: scroll;
    left: 20%;
    top: ${({ top }) => top}px;
    right: 0;
    bottom: 0;
  }
`;

export default CSection;

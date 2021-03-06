import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { useASelector } from '@utils/recipes.util';
import { SIDEBAR_WIDTH } from '@utils/constants.util';

type Props = { isArticle?: boolean };
const CSection: React.FC<Props> = ({ children, isArticle = false }) => {
  const showArticle = useASelector (state => state.screen.showArticle);
  const top = useTop ();
  const classes = isArticle ? 'is-article' : 'main';

  return (
    <Container className={classes} {...{ showArticle, top }} >
      <Content>
        <Grid container spacing={0}>
          {children}
        </Grid>
      </Content>
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
const Content = styled.div`
  max-width: 1000px;
`;
const Container = styled.div<{ showArticle: boolean, top: number }>`
  &.main {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  &.is-article {
    position: absolute;
    height: ${({ showArticle }) => showArticle ? '100vh' : '0'};
    overflow-y: scroll;
    left: ${SIDEBAR_WIDTH}%;
    top: ${({ top }) => top}px;
    right: 0;
    bottom: 0;
  }
`;

export default CSection;

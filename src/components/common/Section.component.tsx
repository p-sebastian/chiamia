import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { useASelector } from '@utils/recipes.util';

type Props = { isArticle?: boolean };
const CSection: React.FC<Props> = ({ children, isArticle = false }) => {
  const didAnimEnd = useASelector (state => state.screen.didAnimEnd);
  return (
    <Container {...{ isArticle, didAnimEnd }} >
      <Grid container spacing={0}>
        {children}
      </Grid>
    </Container>
  );
};

const Container = styled.div<{ isArticle: boolean, didAnimEnd: boolean }>`
    ${({ isArticle, didAnimEnd }) => {
      if (!isArticle) { return ''; }
      return `
        position: absolute;
        height: ${didAnimEnd ? '100vh' : '0'};
        overflow: hidden;
        left: 20%;
        top: 0;
        right: 0;
      `;
    }};
  `;

export default CSection;

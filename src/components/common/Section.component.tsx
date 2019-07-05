import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

type Props = { isArticle?: boolean };
const CSection: React.FC<Props> = ({ children, isArticle = false }) => {
  return (
    <Container {...{ isArticle }} >
      <Grid container spacing={0}>
        {children}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
    ${({ isArticle }: Props) => isArticle ? `
      position: absolute;
      height: 0;
      overflow: hidden;
      left: 20%;
      top: 0;
      right: 0;
    ` : ''};
  `;

export default CSection;

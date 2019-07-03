import React, { ComponentType } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

type TWithLayout = (Page: ComponentType) => ComponentType;
const withLayout: TWithLayout = Page => () => (
    <Container>
      <AppBar position="sticky">
        <Toolbar>
          <Typography>Chiamia</Typography>
        </Toolbar>
      </AppBar>
      <Page />
    </Container>
);

const Container = styled.div`
  flex-grow: 1;
`;

export default withLayout;

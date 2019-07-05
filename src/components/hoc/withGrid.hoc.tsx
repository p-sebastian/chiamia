import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HOC } from '@utils/types.util';

const withGrid: HOC = Page => () => (
  <Grid item xs={12} sm={6} md={4}>
    <Page />
  </Grid>
);

export default withGrid;

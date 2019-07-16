import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HOC } from '@utils/types.util';
import _ from 'lodash';

type Options = { xs?: number, sm?: number, md?: number};
const DEFAULT = { xs: 12, sm: 6, md: 4 };
const withGrid: HOC<Options> = (Page, options: Options = {}) => () => (
  <Grid item {..._.merge (DEFAULT, options) as any}>
    <Page />
  </Grid>
);

export default withGrid;

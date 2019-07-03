import React from 'react';
import Link from 'next/link';
import withLayout from '@hoc/withLayout.hoc';
import { Typography } from '@material-ui/core';
import CCard from '@common/Card.component';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <div>
      <Typography variant="h1">Some title</Typography>
      <Typography variant="h2">Some title</Typography>
      <Typography variant="h3">Some title</Typography>
      <Typography variant="caption">Some title</Typography>
      <Typography variant="subtitle1">Some title</Typography>
      <Typography variant="subtitle2">Some title</Typography>
      <Section>
        <CCard/>
      </Section>
      {/* <Link href="/About">
        <button>Go to About</button>
      </Link> */}
    </div>
  );
};

const Section = styled.div`
  width: 50%;
`;

export default withLayout (HomePage);

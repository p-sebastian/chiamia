import React from 'react';
import Link from 'next/link';
import withLayout from '@components/hoc/withLayout.hoc';
import styled from 'styled-components';

const BlogPage = () => {
  return (
    <Container>
      <Link href="/home">
        <a>Home Page</a>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
`;

export default withLayout (BlogPage);

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <Title>Home Page</Title>
      <Link href="/About">
        <button>Go to About</button>
      </Link>
    </div>
  );
};

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default HomePage;

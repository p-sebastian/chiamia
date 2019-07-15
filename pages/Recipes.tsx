import React from 'react';
import Link from 'next/link';
import withLayout from '@components/hoc/withLayout.hoc';
import styled from 'styled-components';
import CCard from '@common/Card.component';
import CSection from '@common/Section.component';
import CArticle from '@common/Article.component';

const RecipesPage = () => {
  return (
    <Container>
      <CSection>
        <CCard/>
        <CCard/>
        <CCard/>
        <CCard/>
        <CCard/>
        <CCard/>
        <CCard/>
        <CCard/>
        <CCard/>
        <CCard/>
        <CCard/>
        <CCard/>
        <CCard/>
        <CCard/>
      </CSection>
      <CSection isArticle>
        <CArticle />
      </CSection>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
`;

export default withLayout (RecipesPage);

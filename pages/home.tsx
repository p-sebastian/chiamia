import React from 'react';
import withLayout from '@hoc/withLayout.hoc';
import styled from 'styled-components';
import CCard from '@common/Card.component';
import CSection from '@common/Section.component';
import CArticle from '@common/Article.component';

const HomePage = () => {

  return (
    <div>
      {/* <Splash/> */}
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
    </div>
  );
};

const Splash = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(33, 38, 34);
`;

export default withLayout (HomePage);

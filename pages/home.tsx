import React from 'react';
import withLayout from '@hoc/withLayout.hoc';
import styled from 'styled-components';
import CCard from '@common/Card.component';
import CSection from '@common/Section.component';
import CArticle from '@common/Article.component';

const HomePage = () => {

  return (
    <Container>
      <Splash/>
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

const Splash = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('/static/imgs/main_background.jpg');
  background-size:     cover;                      /* <------ */
  background-repeat:   no-repeat;
  background-position: center center; 
  /* background-color: rgb(33, 38, 34); */
`;

export default withLayout (HomePage);

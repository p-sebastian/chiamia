import React from 'react';
import withLayout from '@hoc/withLayout.hoc';
import styled from 'styled-components';
import CCard from '@common/Card.component';
import CSection from '@common/Section.component';
import CArticle from '@common/Article.component';
import { Typo } from '@common/Typo.component';
import { DARK } from '@utils/constants.util';
import Background from '@common/Background.component';

const HomePage = () => {

  return (
    <Background src="/static/imgs/main_background.jpg">
      <MainContainer>
        <Title>Some Title, with some Text</Title>
        <Subtitle>Some subtitle with some text</Subtitle>
      </MainContainer>
      <MainContainer>
        <Title>Some Title, with some Text</Title>
        <Subtitle>Some subtitle with some text</Subtitle>
      </MainContainer>
      {/* <CSection>
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
      </CSection> */}
    </Background>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  top: -100px;
  max-width: 20vw;
  margin-left: 5%;
`;
const Title = Typo ('h1')`
  line-height: 1.2em !important;
  color: ${DARK} !important;
  font-size: 2em !important;
`;
const Subtitle = Typo ('subtitle1')`
  line-height: 1.1em !important;
  color: ${DARK} !important;
  font-size: 1.6em !important;
`;
// const Container = styled.div`
//   position: fixed;
//   height: 100vh;
//   width: 100%;
//   background-image: url('/static/imgs/main_background.jpg');
//   background-size:     cover;
//   background-repeat:   no-repeat;
//   background-position: center center; 
//   overflow-y: scroll;
// `;

export default withLayout (HomePage);

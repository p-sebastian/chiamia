import React from 'react';
import Link from 'next/link';
import withLayout from '@components/hoc/withLayout.hoc';
import styled from 'styled-components';
import CCard from '@common/Card.component';
import TallCard from '@common/Tall-Card.component';
import CSection from '@common/Section.component';
import CArticle from '@common/Article.component';
import Background from '@common/Background.component';
import List from '@material-ui/core/List';
import { Typo } from '@common/Typo.component';
import { DARK } from '@utils/constants.util';
import { Grid } from '@material-ui/core';
import { useASelector } from '@utils/recipes.util';

const RecipesPage = () => {
  const screenWidth = useASelector (state => state.screen.screenWidth);

  return (
    <Container>
      <Background src="/static/imgs/recipes_recent.jpg">
        <Right>
          <Title>Most Recent</Title>
          <ListContainer>
            {/* <CList> */}
              <TallCard/>
              <TallCard/>
              <TallCard isLast/>
            {/* </CList> */}
          </ListContainer>
        </Right>
      </Background>
      <CSection isArticle>
        <CArticle />
      </CSection>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
`;

const ListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  max-width: 25vw;
`;
const CList = styled (List)`
  display: flex;
  flex-direction: row;
  padding: 0;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  max-height: 100vh;
  max-width: 25vw;
  float: right;
  margin-right: 10%;
`;
const Title = Typo ('h1')`
  margin-top: 15vh !important;
  line-height: 1.2em !important;
  color: ${DARK} !important;
  font-size: 2em !important;
`;

export default withLayout (RecipesPage);

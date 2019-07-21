import React, { useCallback } from 'react';
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
import { useTransform } from '@hooks/useTransform.hook';
import CPlaceholder from '@components/Placeholder.component';

const RecipesPage = () => {
  const screenWidth = useASelector (state => state.screen.screenWidth);
  const [dimensions, setDimensions, onClick] = useTransform ();
  const reset = useCallback (
    () => setDimensions ({ width: 0, height: 0, left: 0, top: 0, right: 0 }),
    [dimensions]
  );

  return (
    <Container>
      <Background src="/static/imgs/recipes_recent.jpg">
        <Right>
          <Title>Most Recent</Title>
          <ListContainer>
            {/* <CList> */}
              <TallCard onClick={onClick}/>
              <TallCard onClick={onClick}/>
              <TallCard onClick={onClick} isLast/>
            {/* </CList> */}
          </ListContainer>
        </Right>
      </Background>
      <CSection isArticle>
        <CArticle />
      </CSection>
      <CPlaceholder reset={reset} dimensions={dimensions} />
    </Container>
  );
};

const onCardClick = () => {

};

const Container = styled.div`
  min-height: 100vh;
`;

const ListContainer = styled.div`
  scroll-snap-type: y mandatory;
  display: flex;
  overflow-x: auto;
  max-width: 20vw;
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
  margin: 13vh 0 3vh 0 !important;
  line-height: 1.2em !important;
  color: ${DARK} !important;
  font-size: 2em !important;
`;

export default withLayout (RecipesPage);

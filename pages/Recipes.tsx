import React, { useCallback } from 'react';
import Link from 'next/link';
import withLayout from '@components/hoc/withLayout.hoc';
import styled from 'styled-components';
import TallCard from '@common/Tall-Card.component';
import CSection from '@common/Section.component';
import CArticle from '@common/Article.component';
import Background from '@common/Background.component';
import { Typo } from '@common/Typo.component';
import { DARK } from '@utils/constants.util';
import { useTransform } from '@hooks/useTransform.hook';
import CPlaceholder from '@components/Placeholder.component';

const RecipesPage = () => {
  const [dimensions, setDimensions, onClick] = useTransform ();
  const reset = useCallback (
    () => setDimensions ({ width: 0, height: 0, left: 0, top: 0, right: 0 }),
    [dimensions]
  );

  return (
    <Container>
      <Background position="right" src="/static/imgs/recipes_recent.jpg">
        <Content>
          <Title>Most Recent</Title>
          <ListContainer>
            <TallCard onClick={onClick}/>
            <TallCard onClick={onClick}/>
            <TallCard onClick={onClick} isLast/>
          </ListContainer>
        </Content>
      </Background>
      <CSection isArticle>
        <CArticle />
      </CSection>
      <CPlaceholder reset={reset} dimensions={dimensions} />
    </Container>
  );
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
const Content = styled.div`
  display: flex;
  margin-top: -10%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-height: 100vh;
  max-width: 25vw;
  /* margin-right: 10%; */
`;
const Title = Typo ('h1')`
  margin: 13vh 0 3vh 0 !important;
  line-height: 1.2em !important;
  color: ${DARK} !important;
  font-size: 2em !important;
`;

export default withLayout (RecipesPage);

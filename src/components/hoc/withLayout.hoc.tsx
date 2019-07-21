import React from 'react';
import styled from 'styled-components';
import { HOC, TActions } from '@utils/types.util';
import { useResize } from '@hooks/useResize.hook';
import { useADispatch, useASelector } from '@utils/recipes.util';
import { setContentDimesions, toggleArticle } from '@actions/screen.actions';
import Button from '@material-ui/core/Button';
import { MAIN_WIDTH } from '@utils/constants.util';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const withLayout: HOC = Page => () => {
  const isShowing = useASelector (state => state.screen.isShowing);
  const dimensions = useResize ();
  const dispatch = useADispatch ();
  dispatch (setContentDimesions (dimensions));

  return (
    <Container>
      <SAppBar elevation={1} color="inherit" position="fixed">
        <Toolbar>
          <HeaderButton isTitle href="/home">Chiamia</HeaderButton>
          {renderButtons (isShowing, dispatch)}
        </Toolbar>
      </SAppBar>
      <Right>
        <Page />
      </Right>
    </Container>
  );
};
const renderButtons = (isShowing: boolean, dispatch: React.Dispatch<TActions>) => {
  if (isShowing) {
    return (
      <SIconButton onClick={() => dispatch (toggleArticle (false))}>
        <Close />
      </SIconButton>
    );
  }
  return (
    <ButtonContainer>
      <HeaderButton href="/recipes">Recipes</HeaderButton>
      <HeaderButton href="/blog">Blog</HeaderButton>
      <HeaderButton href="/about">About</HeaderButton>
    </ButtonContainer>
  );
};

const HeaderButton: React.FC<{ href: string, isTitle?: boolean }> = ({ children, href, isTitle = false }) => (
  <HeaderContainer isTitle={isTitle}>
    <Link href={href}>
      <CButton>{children}</CButton>
    </Link>
  </HeaderContainer>
);

const HeaderContainer = styled.div<{isTitle: boolean}>` 
  flex-grow: ${({ isTitle }) => isTitle ? 1 : 0};
`;
const Container = styled.div`
  flex-grow: 1;
  position: relative;
`;
const SAppBar = styled (AppBar)`
  color: rgb(33, 38, 34) !important;
  background-color: #ECECEC !important;
`;
const Right = styled.div`
  width: ${MAIN_WIDTH}%;
  float: right;
  background-color: #CAD2E2;
`;
const CButton = styled (Button)`
font-size: 1.1em !important;
line-height: 2 !important;
&:hover span.MuiButton-label{
    background: linear-gradient( 135deg, #002661 10%, #84FFF5 100%);
    background-clip: text;
    color: transparent;
  }
`;
const SIconButton = styled (IconButton)`
  margin-left: auto !important;
`;
const ButtonContainer = styled.div`
  display: flex;
`;

export default withLayout;

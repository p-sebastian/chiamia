import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { HOC } from '@utils/types.util';
import { useResize } from '@hooks/useResize.hook';
import { useADispatch } from '@utils/recipes.util';
import { setContentDimesions } from '@actions/screen.actions';
import Button from '@material-ui/core/Button';
import { SIDEBAR_WIDTH, MAIN_WIDTH } from '@utils/constants.util';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link';
import { Typo } from '@common/Typo.component';

const withLayout: HOC = Page => () => {
  const dimensions = useResize ();
  const dispatch = useADispatch ();
  dispatch (setContentDimesions (dimensions));

  return (
    <Container>
      <SAppBar elevation={1} color="inherit" position="fixed">
        <Toolbar>
          <HeaderButton isTitle href="/home">Chiamia</HeaderButton>
          <HeaderButton href="/recipes">Recipes</HeaderButton>
          <HeaderButton href="/blog">Blog</HeaderButton>
          <HeaderButton href="/about">About</HeaderButton>
        </Toolbar>
      </SAppBar>
      <Right>
        <Page />
      </Right>
    </Container>
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
// const Left = styled.div`
//   display: flex;
//   position: fixed;
//   width: ${SIDEBAR_WIDTH}%;
//   height: 100vh;
//   /* background-image: linear-gradient(180deg, #9B4141, #FFFFFF); */
//   background-color: #FFFFFF;
//   /* background-color: #697895; */
// `;
// const Sidebar = styled.div`
//   padding: 30px 4.347826086957%;
//   display: flex;
//   flex-direction: column;
//   flex: 1;
// `;
// const ButtonContainer = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   max-height: 40vh;
//   padding: 0 20px;
// `;

export default withLayout;

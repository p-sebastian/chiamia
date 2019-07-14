import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { HOC } from '@utils/types.util';
import { useResize } from '@hooks/useResize.hook';
import { useADispatch } from '@utils/recipes.util';
import { setContentDimesions } from '@actions/screen.actions';
import Button from '@material-ui/core/Button';
import { SIDEBAR_WIDTH, MAIN_WIDTH } from '@utils/constants.util';

const withLayout: HOC = Page => () => {
  const dimensions = useResize ();
  const dispatch = useADispatch ();
  dispatch (setContentDimesions (dimensions));
  return (
    <Container>
      <Left>
        <Sidebar>
          <Title>Chiamia</Title>
          <ButtonContainer>
            <CButton variant="contained">Recipes</CButton>
            <CButton variant="contained">Blog</CButton>
            <CButton variant="contained">About</CButton>
          </ButtonContainer>
        </Sidebar>
      </Left>
      <Right>
        <Page />
      </Right>
    </Container>
  );
};

const Container = styled.div`
  flex-grow: 1;
  position: relative;
`;
const Left = styled.div`
  display: flex;
  position: fixed;
  width: ${SIDEBAR_WIDTH}%;
  height: 100vh;
  /* background-image: linear-gradient(to bottom right, #7821CE, #C087F8); */
  background-color: #333333;
`;
const Right = styled.div`
  width: ${MAIN_WIDTH}%;
  float: right;
  background-color: #CAD2E2;
`;
const Sidebar = styled.div`
  padding: 30px 4.347826086957%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-content: center; */
  justify-content: space-between;
  max-height: 40vh;
  padding: 0 10px;
`;
const CButton = styled (Button)`
  background-image: linear-gradient(45deg, #95B6FD 30%, #DEFFF2 90%);
  border-radius: 8px !important;
  line-height: 2 !important;
  box-shadow: 2px 2px 6px #A1CEBD !important;
  &:hover {
    background-image: linear-gradient(45deg, #95B6FD 20%, #DEFFF2 70%);
    box-shadow: 4px 4px 10px #A1CEBD !important;
  }
`;
const Title = styled (Typography).attrs (() => ({ variant: 'h1' }))`
  text-align: center;
  font-size: 26px !important;
  color: #CFFAEB !important;
  margin-bottom: 80px !important;
`;

export default withLayout;

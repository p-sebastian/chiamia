import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { HOC } from '@utils/types.util';
import { useResize } from '@hooks/useResize.hook';
import { useADispatch } from '@utils/recipes.util';
import { setContentDimesions } from '@actions/screen.actions';
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
  position: fixed;
  width: ${SIDEBAR_WIDTH}%;
  height: 100vh;
  background-image: linear-gradient(to bottom right, #7821CE, #C087F8);
`;
const Right = styled.div`
  width: ${MAIN_WIDTH}%;
  float: right;
  background-color: #EDEDED;
`;
const Sidebar = styled.div`
  padding: 30px 4.347826086957%;
  flex: 1;
`;
const Title = styled (Typography).attrs (() => ({ variant: 'h1' }))`
  text-align: center;
  font-size: 26px !important;
  color: white !important;
`;

export default withLayout;

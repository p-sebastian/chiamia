import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { useASelector, useADispatch } from '@utils/recipes.util';
import { opacityAnimate } from '@utils/keyframes.util';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Close } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { toggleArticle } from '@actions/screen.actions';
import CTitle from './Title.component';
import Jumbotron from './Jumbotron.component';
import Paragraph from './Paragraph.component';
import PAccent from './P-Accent.component';
import JAccent from './J-Accent.component';
import { MAIN_WIDTH, CONTENT_MAX_WIDTH } from '@utils/constants.util';

const TITLE_TEXT = {
  title: 'All Hands on Dok',
  subtitle: 'New Logo and Identity for Amsteldok bvy BFDSD',
  category: 'Reviewed'
};
const IMAGES = [
  'https://www.underconsideration.com/brandnew/archives/amsteldok_logo_new.png',
  'https://www.underconsideration.com/brandnew/archives/amsteldok_references.jpg'
];
const TEXT = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis nibh sem, eget dictum arcu lobortis scelerisque. Pellentesque maximus semper dictum. Vestibulum facilisis tempor dui, sed lacinia mi sodales a. Integer ultrices laoreet blandit. Sed ullamcorper, erat quis rhoncus commodo, dolor enim ultricies odio, eget luctus est metus ut dolor. Nunc eget lacus mi. Vestibulum ultricies ultricies interdum. Etiam malesuada, nisi quis mollis elementum, felis dui posuere lorem, eget scelerisque urna libero at enim. Morbi vitae nulla quam. Aliquam eleifend eu arcu vitae pretium. Praesent ut consequat neque, sed fringilla urna. Suspendisse posuere at erat nec sagittis. Quisque semper suscipit arcu vitae ultricies.
  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent ullamcorper eu sem eu efficitur. Morbi finibus hendrerit massa molestie pellentesque. Praesent eget condimentum tellus. Nunc porta arcu id nulla pulvinar faucibus. Donec convallis nisi urna, et lobortis risus rhoncus non. Sed consectetur nisl in sollicitudin ultricies. Sed et vehicula turpis. Integer scelerisque ligula vitae erat faucibus blandit. Maecenas viverra nisi eget ornare cursus. Sed pulvinar ligula in sem semper mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam tincidunt commodo felis eu dictum. Phasellus auctor elementum cursus. Mauris et nunc scelerisque, lacinia urna eget, eleifend orci.
  Ut velit lorem, pulvinar ac tellus eleifend, dictum ultrices magna. Morbi pretium vestibulum varius. Vivamus in nunc purus. Fusce sit amet nisl vitae leo tempus vulputate. Vestibulum malesuada ante convallis, congue tellus eu, ultrices dui. Phasellus vehicula nulla tellus, a fringilla risus vulputate vel. Suspendisse laoreet at orci eget consectetur. Etiam ullamcorper dapibus interdum. Quisque congue mi et magna sodales, a aliquam lectus malesuada. 
`;

const CArticle: React.FC = () => {
  const showArticle = useASelector (state => state.screen.showArticle);
  const classes = showArticle ? 'article--show' : 'article--hide';
  const dispatch = useADispatch ();

  return (
    <Container className={classes}>
      <SAppBar elevation={1} color="inherit" position="sticky">
        <Toolbar>
          <SIconButton onClick={() => dispatch (toggleArticle (false))}>
            <Close />
          </SIconButton>
        </Toolbar>
      </SAppBar>
      <ContentContainer>
        <Content>
          <CTitle
            title={TITLE_TEXT.title}
            subtitle={TITLE_TEXT.subtitle}
            category={TITLE_TEXT.category}
          />
          <Jumbotron src={IMAGES[0]} alt="some text" />
          <Paragraph text={TEXT}/>
          <PAccent text={TEXT}/>
          <JAccent src={IMAGES[1]} alt="some text" caption="References" />
        </Content>
      </ContentContainer>
    </Container>
  );
};

const ContentContainer = styled.div`
  width: ${MAIN_WIDTH}vw;
`;
const Content = styled.div`
  margin: 40px auto;
  max-width: ${CONTENT_MAX_WIDTH};
`;
const SAppBar = styled (AppBar)`
  color: rgb(33, 38, 34) !important;
  background-color: #ECECEC !important;
`;
const SIconButton = styled (IconButton)`
  margin-left: auto !important;
`;
const Container = styled.div`
  background-color: #ECECEC !important;
  height: 100vh;
  &.article--show {
    animation: ${opacityAnimate ()} 0.6s;
    z-index: 100;
  }
  &.article--hide {
    animation: ${opacityAnimate (true)} 0.6s;
  }
`;

export default CArticle;

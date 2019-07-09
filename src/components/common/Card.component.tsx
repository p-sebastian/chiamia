import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Typography from '@material-ui/core/Typography';
import withGrid from '@components/hoc/withGrid.hoc';
import { useAShallowSelector, useADispatch } from '@utils/recipes.util';
import { ScreenState } from '@reducers/index';
import { zoomAnimate } from '@utils/keyframes.util';
import { toggleArticle } from '@actions/screen.actions';

const src = 'https://www.underconsideration.com/brandnew/archives/atlanta_humane_society_logo_before_after.png';
const alt = 'New Logo and Identity for Atlanta Humane Society by Matchstic';
const CCard: React.FC = () => {
  const screenDimensions = useAShallowSelector (state => state.screen);
  const dispatch = useADispatch ();
  const [transform, dimensions, onClick] = useTransform (screenDimensions);
  const ref = useRef<HTMLDivElement> (null);
  return (
    <Module ref={ref}>
      <Anchor onClick={onClick (ref)}>
        <OnHover>
          <Header>
            <Subtitle1>
              New Logo and Identity for Atlanta Humane Society
            </Subtitle1>
            <H1>Home is where the Pet is</H1>
          </Header>
          <Content>
            <ImageContainer>
              <Image src={src} alt={alt} />
            </ImageContainer>
          </Content>
        </OnHover>
      </Anchor>
      {renderPlaceholder (dimensions, screenDimensions, transform, dispatch)}
    </Module>
  );
};

type Dimensions<N = number> = { width: N, height: N, left: N, top: N, right: N };
type RP = (dimensions: Dimensions, screenDimensions: ScreenState, transform: string, dispatch: ReturnType<typeof useADispatch>) => void;
type Ref<E = HTMLDivElement> = React.RefObject<E>;
type UseTransform = (screenDimensions: ScreenState) => any;
const useTransform: UseTransform = ({ screenHeight, screenWidth }) => {
  const [transform, setTransform] = useState (['', '']);
  const [dimensions, setDimensions] = useState ({ width: 0, height: 0, left: 0, top: 0, right: 0 });

  const onClick = (ref: Ref) => () => {
    const { height, width, left, top, right } = ref.current!.getBoundingClientRect ();
    // Margin of card
    // space in the left minus the size of the sidebar
    // which in this case is 20% the screen size
    const x = left - screenWidth * 0.2;
    const from = `scale3d(${width / screenWidth}, ${height / screenHeight}, 1)`;
    const to = `translate3d(-${x}px, -${top}px, 0) scale3d(0.8, 1, 1)`;

    setDimensions ({ height, width, left, top, right });
    setTransform ([from, to]);
  };
  return [transform, dimensions, onClick];
};

const renderPlaceholder: RP = (dimensions, screenDimensions, transform, dispatch) => {
  const { width, height } = dimensions;
  // console.info (width, height, dimensions.left);
  if (width + height === 0) { return null; }
  const props = { ...dimensions, ...screenDimensions, transform };
  return <Placeholder onAnimationEnd={() => dispatch (toggleArticle (true))} {...props as any} />;
};

type PlaceholderProps = Dimensions & ScreenState & { transform: string[] };
const Placeholder = styled.div<PlaceholderProps>`
  pointer-events: none;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  background: white;
  transform-origin: 0 0;
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.165,0.84,0.44,1);
  animation-fill-mode: forwards;
  animation-name: ${({ transform }) => zoomAnimate (transform[0], transform[1])};
`;

const Module = styled.div`
  width: 92%;
  margin: 20px 4% 40px;
  position: relative;
  display: block;
`;
const OnHover = styled.div`
  position: relative;
  display: block;
  box-shadow: 2px 2px 5px rgba(0,0,0,.2);
  transition: all .6s cubic-bezier(.165,.84,.44,1);
  background: #fff;
  & :hover::after {
    opacity: 1;
  }
  & ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 4px 4px 10px rgba(0,0,0,.4);
    transition: all .6s cubic-bezier(.165,.84,.44,1);
    opacity: 0;
  }
`;
const Anchor = styled.a`
  color: rgba(242,24,24,.85);
  transition: all 250ms ease;
  text-decoration: none;
`;
const Header = styled.div`
  padding: 15px 4.347826086957%;
  background-color: #d9ffe4;
  overflow: hidden;
  border-bottom: 1px solid transparent;
  ${OnHover}:hover & {
    background-color: #fff !important;
    border-bottom: 1px solid rgba(0,0,0,.15);
    transition: all .6s cubic-bezier(.165,.84,.44,1);
  }
`;
const Subtitle1 = styled (Typography).attrs (() => ({ variant: 'subtitle1' }))`
  position: relative;
  z-index: 1;
  line-height: 1.5em;
  padding: 0 0 10px;
  border-bottom: 1px solid rgba(0,0,0,.15);
  margin: 0 0 10px;
`;
const H1 = styled (Typography).attrs (() => ({ variant: 'h1' }))`
  position: relative;
  z-index: 1;
  line-height: 1.35em;
`;
const Content = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`;
const ImageContainer = styled.div`
  float: left;
  line-height: 0;
  width: 100%;
`;
const Image = styled.img`
  max-width: 100%;
  border: 0;
  display: block;
  margin: 0;
  padding: 0;
`;

export default withGrid (CCard);

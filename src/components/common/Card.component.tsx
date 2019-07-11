import React, { useRef } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import withGrid from '@components/hoc/withGrid.hoc';
import { useTransform } from '@hooks/useTransform.hook';
import CPlaceholder from '@components/Placeholder.component';

const src = 'https://www.underconsideration.com/brandnew/archives/atlanta_humane_society_logo_before_after.png';
const alt = 'New Logo and Identity for Atlanta Humane Society by Matchstic';
const CCard: React.FC = () => {
  const [transform, dimensions, onClick] = useTransform ();

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
      <CPlaceholder dimensions={dimensions} transform={transform} />
    </Module>
  );
};

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

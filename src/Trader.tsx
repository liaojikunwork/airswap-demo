import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as CodefiLogo } from './Codefi.svg';
import { ReactComponent as ArrowRightIcon } from './arrow-right-icon.svg';
import { ReactComponent as InfoArrow } from './info-arrow.svg';

import Button from './components/Button';
import Flex from './components/Flex';
import openTraderWidget from './openTraderWidget';

const AppContainer = styled(Flex).attrs({ $justify: 'center' })`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: #BCC2C5;
`

const LogoContainer = styled.div`
  width: 100%;
  flex-shrink: 0;

  svg {
    path {
      fill: white;
    }
  }
`
const ButtonText = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 500;
  margin-right: 5px;
`

const DocsLink = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: white;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: #2b71ff;
  }
`

const ArrowRightIconContainer = styled(Flex)`
  svg {
    width: 20px;
    height: 20px;

    path {
      stroke: white;
    }
  }
`

const InfoArrowIconContainer = styled(Flex)`
  margin-left: -25px;
  margin-bottom: 5px;
`

const ButtonContainer = styled(Flex).attrs({ $justify: 'center' })`
  position: relative;
`

const InfoArrowContainer = styled(Flex).attrs({ $align: 'flex-end', $direction: 'row' })`
  position: absolute;
  top: calc(100% + 10px);
  left: calc(50%);
`

const InfoText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: white;
  width: 85px;
`

export default function TraderWidget() {
  const location = useLocation()
  const query = queryString.parse(location.search, { arrayFormat: 'comma' });

  useEffect(() => {
    if (query.cid) {
      openTraderWidget(`${query.cid}`)
    }
  }, [query.cid])

  return (
    <AppContainer>
      <LogoContainer>
        <CodefiLogo />
      </LogoContainer>
      <Flex $height="100%" $justify="center">
        <ButtonContainer>
          <Button onClick={() => openTraderWidget()}>
            <Flex $direction="row">
              <ButtonText>
                Widget
              </ButtonText>
              <ArrowRightIconContainer>
                <ArrowRightIcon />
              </ArrowRightIconContainer>
            </Flex>
          </Button>
          <InfoArrowContainer>
            <InfoArrowIconContainer>
              <InfoArrow />
            </InfoArrowIconContainer>
            <InfoText>
              Click here to launch the widget
            </InfoText>
          </InfoArrowContainer>
        </ButtonContainer>
      </Flex>
      <Flex $shrink={0}>
        <DocsLink target="_blank" href="https://docs.fluidity.io/#/README">Widget Documentation</DocsLink>
      </Flex>
    </AppContainer>
  );
}

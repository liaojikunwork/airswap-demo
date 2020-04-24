import React from 'react';
import styled from 'styled-components';
import './App.css'
import { ReactComponent as AirswapLogo } from './airswap-logo.svg';
import { ReactComponent as ArrowRightIcon } from './arrow-right-icon.svg';

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

export default function App() {
  return (
    <AppContainer>
      <LogoContainer>
        <AirswapLogo />
      </LogoContainer>
      <Flex $height="100%" $justify="center">
        <Button onClick={openTraderWidget}>
          <Flex $direction="row">
            <ButtonText>
              Widget
            </ButtonText>
            <ArrowRightIconContainer>
              <ArrowRightIcon />
            </ArrowRightIconContainer>
          </Flex>
        </Button>
      </Flex>
      <Flex $shrink={0}>
        <DocsLink target="_blank" href="https://docs.fluidity.io/#/">Widget Documentation</DocsLink>
      </Flex>
    </AppContainer>
  );
}

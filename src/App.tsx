import React from 'react';
import styled from 'styled-components';
import './App.css'

import TraderWidget from './TraderWidget';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function App() {
  return (
    <AppContainer>
      <TraderWidget />
    </AppContainer>
  );
}

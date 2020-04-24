import React from 'react';
import styled from 'styled-components';

import { SwapOrder, Signature } from './types';
import Button from './components/Button';
import WidgetCard from './components/WidgetCard';

declare let window: any

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`

export default function TraderWidget() {
  const openWidgetV1 = () => {
    if (!window.AirSwapTrader) return

    // Widget Whitelabelling
    const widgetConfig = {
      primaryColor: '#151212',
      secondaryColor: '#2B71FF',
      logoUrl: 'https://via.placeholder.com/300/09f/fff.png',
    }

    const metadataConfig = {
      faviconUrl: 'https://via.placeholder.com/300/09f/fff.png',
      title: 'Test Title',
      description: 'Test Description',
    }

    // Setting custom tokens in token selector
    const customTokenSections = [
      {
        label: 'Securitize',
        tokens: ['0xf74387c4c4ea6351036f8dc3d0fe14542f20fe48']
      },
      {
        label: 'Stablecoins',
        tokens: ['0x0000000000000000000000000000000000000000']
      }
    ]

    // Callback functions
    const onCreate = (order: SwapOrder, signature: Signature, cid: string) => {
      console.log(order)
    }

    const onSubmit = () => {
      console.log('Transaction Submitted!')
    }

    const onSwap = (txId: string) => {
      console.log('Swap Completed!')
      console.log(txId)
    }

    const onError = (error: string) => {
      console.log('There was an issue with the transaction');
      console.log(error);
    }

    const onCancel = (txId: string) => {
      console.log('Order Cancelled')
    }

    const onClose = () => {
      console.log('Widget Closed')
    }

    // Render Widget
    // Full configuration options can be found at https://docs.airswap.io/take-liquidity/embed-airswap#embed-airswap-otc
    window.AirSwapTrader.render({
      widgetConfig,
      metadataConfig,
      orderGasLimit: 9000000,
      customTokenSections,
      customShareURL: 'https://test.com',
      defaultMakerToken: '0xf74387c4c4ea6351036f8dc3d0fe14542f20fe48',
      env: 'production',
      chainId: 4,
      onCreate,
      onSubmit,
      onSwap,
      onError,
      onCancel,
      onClose,
    },
    'body',
    )
  }

  const openWidgetV2 = () => {
    // TBD
  }

  return (
    <WidgetCard title="Trader Widget Demo">
      <ButtonContainer>
        <Button onClick={openWidgetV1} label="Open Widget" />
        <Button isDisabled onClick={openWidgetV2} label="Open Widget V2" />
      </ButtonContainer>
    </WidgetCard>
  )
}

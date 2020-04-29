import React from 'react';
import { useLocation } from 'react-router-dom';

import { SwapOrder, Signature } from './types';

declare let window: any

export default function openTraderWidget(orderCID?: string) {
  if (!window.AirSwapTrader) return

  // Widget Whitelabelling
  const widgetConfig = {
    primaryColor: '#004A98',
    secondaryColor: '#004A98',
    logoUrl: 'https://www.vertalo.com/assets/images/vertalo-logo-white.svg',
  }

  const metadataConfig = {
    faviconUrl: 'https://www.vertalo.com/assets/images/vertalo-logo-white.svg',
    title: 'Vertalo Demo',
    description: 'Product Demo',
  }

  // Setting custom tokens in token selector
  const customTokenSections = [
    {
      label: '',
      tokens: ['0xf74387c4c4ea6351036f8dc3d0fe14542f20fe48']
    },
    {
      label: '',
      tokens: ['0x0000000000000000000000000000000000000000']
    }
  ]

  // Callback functions
  const onCreate = (order: SwapOrder, signature: Signature, cid: string) => {
    console.log(order)
    console.log(signature)
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

  const config: any = {
    // widgetConfig,
    // metadataConfig,
    // orderGasLimit: 9000000,
    // customTokenSections,
    customShareURL: 'https://demo.airswap.io/',
    // defaultMakerToken: '0xf74387c4c4ea6351036f8dc3d0fe14542f20fe48',
    env: 'production',
    chainId: 1,
    onCreate,
    onSubmit,
    onSwap,
    onError,
    onCancel,
    onClose,
  }
  
  if (orderCID) {
    config.cid = orderCID
  }

  // Render Widget
  // Full configuration options can be found at https://docs.airswap.io/take-liquidity/embed-airswap#embed-airswap-otc
  window.AirSwapTrader.render(config, 'body')
}

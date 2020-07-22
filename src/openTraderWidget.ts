import { SwapOrder, Signature } from './types'

declare let window: any

export default function openTraderWidget(orderCID?: string) {
  if (!window.AirSwapTrader) return

  // Widget Whitelabelling
  const widgetConfig = {
    primaryColor: '#222323',
    secondaryColor: '#222323',
    logoUrl:
      'https://static1.squarespace.com/static/5d56ea2f13bf100001583119/t/5d66f25996fe220001eed666/1591726775858/?format=1500w',
  }

  const metadataConfig = {
    faviconUrl:
      'https://static1.squarespace.com/static/5d56ea2f13bf100001583119/t/5d66f25996fe220001eed666/1591726775858/?format=1500w',
    title: 'Codefi',
    description: 'Codefi Demo',
  }

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
    console.log('There was an issue with the transaction')
    console.log(error)
  }

  const onCancel = (txId: string) => {
    console.log('Order Cancelled')
  }

  const onClose = () => {
    console.log('Widget Closed')
  }

  const config: any = {
    widgetConfig,
    metadataConfig,
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
  window.AirSwapTrader(config).render('body')
}

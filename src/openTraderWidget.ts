import { SwapOrder, Signature } from './types'

declare let window: any

export default function openTraderWidget(orderCID?: string) {
  if (!window.AirSwapTrader) return

  // Widget Whitelabelling
  const widgetConfig = {
    primaryColor: '#383F43',
    secondaryColor: '#AB7E4E',
    logoUrl:
      'https://www.wiv.io/wp-content/uploads/2019/04/Logo-WiV-main-hd2.png',
  }

  const metadataConfig = {
    faviconUrl:
      'https://www.wiv.io/wp-content/uploads/2019/04/Logo-WiV-main-hd2.png',
    title: 'wiv demo',
    description: 'wiv demo',
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
    defaultTakerToken: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
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

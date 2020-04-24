export interface SwapOrder {
  makerToken: string
  makerAmount?: string
  makerId?: string
  makerWallet: string
  makerKind: string

  takerToken: string
  takerAmount?: string
  takerId?: string
  takerWallet: string
  takerKind: string

  nonce: string | number
  expiry: number
}

export interface Signature {
  version: string
  signer: string
  r: string
  s: string
  v: number
}
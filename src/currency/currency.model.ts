export enum CurrencyCode {
  pln = 'pln',
  eu = 'eu',
  usd = 'usd',
}

export interface ExchangeRate {
  code: CurrencyCode;
  rate: number;
}

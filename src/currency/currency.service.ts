import { Injectable } from '@nestjs/common';
import { CurrencyCode, ExchangeRate } from './currency.model';

@Injectable()
export class CurrencyService {
  // TODO: create real service
  // TODO: create proxy for it
  // TODO: create filtering for rates

  async findAll(currencyCodes: CurrencyCode[]): Promise<ExchangeRate[]> {
    return [
      { code: CurrencyCode.pln, rate: 1 },
      { code: CurrencyCode.eu, rate: 4.50275 },
      { code: CurrencyCode.usd, rate: 3.9865 },
    ];
  }
}

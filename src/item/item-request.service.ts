import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';

interface ZombieItem {
  id: number;
  name: string;
  price: number;
}

interface ZombieItemResponse {
  timestamp: number;
  items: ZombieItem[];
}

@Injectable()
export class ItemRequestService {
  @Inject(HttpService)
  private httpService: HttpService;

  async request(): Promise<ZombieItemResponse> {
    const response = (await lastValueFrom(
      this.httpService.get('https://zombie-items-api.herokuapp.com/api/items'),
    )) as AxiosResponse<ZombieItemResponse>;

    return response.data;
  }
}

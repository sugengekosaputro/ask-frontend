import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Layanan } from 'src/app/interfaces/model/Layanan';
import { Response } from 'src/app/interfaces/model/Response';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class LayananService extends BaseService<Response<Layanan>> {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }
}

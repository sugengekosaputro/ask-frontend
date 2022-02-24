import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instansi } from 'src/app/interfaces/model/Instansi';
import { Response } from 'src/app/interfaces/model/Response';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class InstantsiService extends BaseService<Response<Instansi>> {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }
  
}

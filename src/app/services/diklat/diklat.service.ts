import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Diklat } from 'src/app/interfaces/model/Diklat';
import { Response } from 'src/app/interfaces/model/Response';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class DiklatService extends BaseService<Response<Diklat>> {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }
}

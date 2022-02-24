import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberType } from 'src/app/interfaces/model/MemberType';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class MemberTypeService extends BaseService<MemberType> {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }
}

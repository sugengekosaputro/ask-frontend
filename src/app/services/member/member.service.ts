import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'src/app/interfaces/model/Member';
import { Response } from 'src/app/interfaces/model/Response';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService extends BaseService<Response<Member>>{

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }
}

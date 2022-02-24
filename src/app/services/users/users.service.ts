import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BaseService } from '../base/base.service';
import { Response } from 'src/app/interfaces/model/Response';
import { User } from 'src/app/interfaces/model/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<Response<User>> {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'src/app/interfaces/model/Response';
import { Role } from 'src/app/interfaces/model/Role';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService extends BaseService<Response<Role>> {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }
}

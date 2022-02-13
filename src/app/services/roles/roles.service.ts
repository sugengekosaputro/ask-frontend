import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private API: string = `${environment.api}/roles`;
  constructor(private httpClient: HttpClient) { }

  getRolesById(id: string) {
    return this.httpClient.get(`${this.API}/${id}`)
  }
}

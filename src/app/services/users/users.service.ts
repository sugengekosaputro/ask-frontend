import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private API: string = `${environment.api}/users`;
  constructor(private httpClient: HttpClient) { }

  getUsers(params?: HttpParams) {
    return this.httpClient.get(this.API, { params: params });
  }

  getUserById(id: String) {
    return this.httpClient.get(`${this.API}/${id}`);
  }

  postUser(data: any) {
    return this.httpClient.post(this.API, data);
  }

  putUser(data: any, id: string) {
    return this.httpClient.put(`${this.API}/${id}`, data);
  }

  deleteUser(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}

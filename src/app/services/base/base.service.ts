import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class BaseService<T> {

  protected endpoint!: string;
  constructor(
    public httpClient: HttpClient
  ) {
    this.endpoint = this.endpoint;
  }

  private getBaseUrl() {
    return environment.base_url+this.endpoint;
  }

  getAllData(param?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(this.getBaseUrl(), { params: param });
  }

  getDataById(id: number, param?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(`${this.getBaseUrl()}/${id}`, { params: param });
  }

  createData<I>(data: I) {
    return this.httpClient.post(this.getBaseUrl(), data);
  }

  updateData<I>(data: I, id: number) {
    return this.httpClient.post(`${this.getBaseUrl()}/${id}`, data);
  }

  deleteData(id: number) {
    return this.httpClient.get(`${this.getBaseUrl()}/${id}`);
  }
}

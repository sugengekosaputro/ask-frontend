import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/interfaces/model/Login';
import { Response } from 'src/app/interfaces/model/Response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private API: string = `${environment.base_url}/login`;
  constructor(private httpClient: HttpClient) { }

  login(data: Login): Observable<Response<any>> {
    return this.httpClient.post<Response<any>>(this.API, data);
  }
}

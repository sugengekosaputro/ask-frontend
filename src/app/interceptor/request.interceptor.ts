import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let userId: any = localStorage.getItem('userId');
    if (userId){
      request = request.clone({
        headers: request.headers.set('userId', userId)
      });
    }
    
    return next.handle(request);
  }
}

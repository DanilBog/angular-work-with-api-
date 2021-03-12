import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProxyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //так не работает, нужно менять url внутри clone( .... )
    //let proxy_req = request.clone();
    //proxy_req.url = 'https://cors-anywhere.herokuapp.com/' + proxy_req.url;
    
    const proxyReq = request.clone({
      url: 'https://cors-anywhere.herokuapp.com/' + request.url
    });
    
    
    console.log('HttpRequest from interceptor:', request);
    
    console.log('HttpRequest после клонирования и добавления прокси:', proxyReq);
    
    return next.handle(proxyReq);
  }
}

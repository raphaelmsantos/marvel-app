import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { environment } from '../environments/environment';
import { HttpParams } from '@angular/common/http/src/params';
@Injectable()
export class MarvelInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const authReq = req.clone(
            {
                params: req.params.append("apikey", environment.publicKey)
            });

        
        return next.handle(authReq);
    }
}
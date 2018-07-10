import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            request = request.clone(
              {
              /*  setHeaders: {
                   Authorization: `Token ${currentUser.token}`
                }*/
               headers: new HttpHeaders({
                  'Content-Type': 'application/json',
                  'Authorization': `Token ${currentUser.token}`
                })
              //headers: new HttpHeaders().set('Authorization', `Token ${currentUser.token}`)
            //   headers:
            //   new HttpHeaders()
            //   .append('Authorization', `Token ${currentUser.token}`)
             });
        }
        console.log(request)
       return next.handle(request);
    }
}

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
        
        .catch((error: HttpErrorResponse) => {
            const parsedError = Object.assign({}, error, { error: JSON.parse(error.error) });
            let mess = parsedError.error.message
            console.log(parsedError)
            return new ErrorObservable(mess);
            //return Observable.empty<HttpEvent<any>>();
        })
    /*
        .map((event: HttpEvent<any>) => {
            if (event instanceof Error) {
              /*  console.log(event)
              /*
              return event.clone({
                body: JSON.parse(event.body),
              });*/
           // }
         // })*/
          /*
          .catch((error: HttpErrorResponse) => {
              const parsedError = Object.assign({}, error, { error: JSON.parse(error.error) });
              let mess = parsedError.error.message
              console.log(parsedError)
              return new ErrorObservable(mess);
              
          });
          */
    
}
}
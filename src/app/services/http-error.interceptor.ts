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
            console.log(error.error.message);
            const parsedError = Object.assign({}, error, { error: JSON.parse(error.error) });
            const mess = parsedError.error.message;
            return new ErrorObservable(mess);
        })
}
}
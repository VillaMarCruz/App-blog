import { HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, catchError, throwError } from 'rxjs';
import * as fromUser from '@store/user/index';

export const authInterceptor: HttpInterceptorFn = (
  req,
  next
): Observable<HttpEvent<any>> => {

  const router = inject(Router);
  const store = inject(Store<any>);


  const tokenSeguridad = localStorage.getItem('token');

  if (tokenSeguridad) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${tokenSeguridad}`
      },
    });
  }

  return next(req).pipe(
    catchError((error) => {

      const CODES = [401, 402]

      if(CODES.includes(error.status)){
        localStorage.removeItem('token');
        store.dispatch(new fromUser.SignOut());
        router.navigate(['/home'])
      }

      return throwError(() => error)
    })
  )
};



import * as fromActions from './user.actions';
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { LoginResponseAPI, UserResponseAPI } from '@models/user.response';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, switchMap, tap, catchError } from 'rxjs/operators';

type Action = fromActions.All;

@Injectable()
export class UserEffects {

  private actions = inject(Actions);

  private httpClient = inject(HttpClient);

  private router = inject(Router);

  constructor() {}

  signInEmail: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGIN_IN_EMAIL),
      map((action: fromActions.SignInEmail) => action.credentials),
      switchMap((userData) =>
        this.httpClient
          .post<LoginResponseAPI>(
            'http://localhost:8080/api/auth/authenticate',
            userData
          )
          .pipe(
            tap((res: LoginResponseAPI) => {
              localStorage.setItem('token', res.response.token);
              this.router.navigate(['admin'])
            }),
            map((res: LoginResponseAPI) => {
              console.log('Inicio de sesión exitoso');
              return new fromActions.SignInEmailSuccess(res.response.token);
            }),
            catchError((error) => {
              console.log(error.message);
              return of(new fromActions.SignInEmailError(error.message));
            })
          )
      )
    )
  );

  init: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.INIT),
      switchMap(async () => localStorage.getItem('token')),
      switchMap((token) => {
        if (token) {
          return this.httpClient
            .get<UserResponseAPI>('http://localhost:8080/api/auth')
            .pipe(
              map(
                (user: UserResponseAPI) =>
                  new fromActions.InitAuthorized(
                    user.response
                  )
              ),
              catchError((error) => {
                return of(new fromActions.InitError(error.message));
              })
            );
        } else {
          return of(new fromActions.InitUnAuthorized());
        }
      })
    )
  );
}

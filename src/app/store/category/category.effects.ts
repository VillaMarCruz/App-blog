import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import {
  map,
  catchError,
  switchMap,
  delay,
  tap,
  mergeMap,
} from 'rxjs/operators';

import * as fromActions from './category.actions';
import { Router } from '@angular/router';
import {
  CategoriesResponseAPI,
  CategoryResponseAPI,
} from '@models/category.response';
import { CategoryRequest } from './category.models';

type Action = fromActions.All;

@Injectable()
export class CategoryEffects {
  constructor(
    private actions: Actions,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  create$ = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.CREATE),
      map((action: fromActions.Create) => action.category),
      switchMap((request: CategoryRequest) =>
        this.httpClient
          .post<CategoryResponseAPI>(
            'http://localhost:8080/api/post/categorias',
            request
          )
          .pipe(
            tap((response: CategoryResponseAPI) => {
              this.router.navigate(['admin/categories']);
            }),
            map(
              (category: CategoryResponseAPI) =>
                new fromActions.CreateSuccess(category.response)
            ),
            catchError((err) => {
              return of(new fromActions.CreateError(err.error.message));
            })
          )
      )
    )
  );

  read$ = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.READ),
      switchMap(() =>
        this.httpClient
          .get<CategoriesResponseAPI>(
            'http://localhost:8080/api/post/categorias'
          )
          .pipe(
            map(
              (category: CategoriesResponseAPI) =>
                new fromActions.ReadSuccess(category.response)
            ),
            catchError((err) => of(new fromActions.ReadError(err.message)))
          )
      )
    )
  );

  readById$ = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.READ_BY_ID),
      map((action: fromActions.ReadById) => action.id),
      switchMap((id: number) =>
        this.httpClient
          .get<CategoryResponseAPI>(
            `http://localhost:8080/api/post/categorias/${id}`
          )
          .pipe(
            map(
              (category: CategoryResponseAPI) =>
                new fromActions.ReadByIdSuccess(category.response)
            ),
            catchError((err) => of(new fromActions.ReadByIdError(err.message)))
          )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.UPDATE),
      mergeMap((action: fromActions.Update) =>
        this.httpClient
          .put<CategoryResponseAPI>(
            `http://localhost:8080/api/post/categorias/${action.id}`,
            action.category
          )
          .pipe(
            tap((response: CategoryResponseAPI) => {
              this.router.navigate([`admin/categorias`]);
            }),
            map(
              (category: CategoryResponseAPI) =>
                new fromActions.UpdateSuccess(category.response)
            ),
            catchError((err) => of(new fromActions.UpdateError(err.message)))
          )
      )
    )
  );

  delete: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.DELETE),
      map((action: fromActions.Delete) => action.id),
      switchMap((id: number) =>
        this.httpClient
          .delete<CategoryResponseAPI>(
            `http://localhost:8080/api/post/categorias/${id}`
          )
          .pipe(
            delay(1000),
            map(
              (category: CategoryResponseAPI) =>
                new fromActions.DeleteSuccess(category.response)
            ),
            catchError((err) => of(new fromActions.DeleteError(err.message)))
          )
      )
    )
  );
}

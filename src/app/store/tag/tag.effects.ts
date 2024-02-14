import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as fromActions from './tag.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { TagRequest, TagResponse } from './tag.models';
import { TagResponseAPI, TagsResponseAPI } from '@models/tag.response';
import { Observable, of } from 'rxjs';
import { NotificationService } from '@services/notification/notification.service';

type Action = fromActions.All;

@Injectable()
export class TagEffects {
  constructor(
    private actions: Actions,
    private httpClient: HttpClient,
    private router: Router,
    private notification: NotificationService
  ) {}

  create$ = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.CREATE),
      map((action: fromActions.Create) => action.tag),
      switchMap((request: TagRequest) => {
        return this.httpClient
          .post<TagResponseAPI>(
            'http://localhost:8080/api/post/etiquetas',
            request
          )
          .pipe(
            tap((response: TagResponseAPI) => {
              this.router.navigate(['admin/tags']);
            }),
            map((tag: TagResponseAPI) => {
              this.notification.success(tag.message);
              return new fromActions.CreateSuccess(tag.response);
            }),
            catchError((err) => {
              this.notification.error(err.error.message);
              return of(new fromActions.CreateError(err.error.message));
            })
          );
      })
    )
  );

  read$ = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.READ),
      switchMap((request: TagRequest) =>
        this.httpClient
          .get<TagsResponseAPI>('http://localhost:8080/api/post/etiquetas')
          .pipe(
            map((tag: TagsResponseAPI) => {
              this.notification.success(tag.message);
              return new fromActions.ReadSuccess(tag.response);
            }),
            catchError((err) =>
              of(new fromActions.ReadError(err.error.message))
            )
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
          .get<TagResponseAPI>(`http://localhost:8080/api/post/etiquetas/${id}`)
          .pipe(
            map((tag: TagResponseAPI) => {
              return new fromActions.ReadByIdSuccess(tag.response);
            }),
            catchError((err) =>
              of(new fromActions.ReadByIdError(err.error.message))
            )
          )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.UPDATE),
      map((action: fromActions.Update) => action),
      mergeMap((action) =>
        this.httpClient
          .put<TagResponseAPI>(
            `http://localhost:8080/api/post/etiquetas/${action.id}`,
            action.tag
          )
          .pipe(
            tap((response: TagResponseAPI) => {
              this.router.navigate([`admin/tags`]);
            }),
            map((tag: TagResponseAPI) => {
              this.notification.success(tag.message);
              return new fromActions.UpdateSuccess(tag.response);
            }),
            catchError((err) =>
              of(new fromActions.UpdateError(err.error.message))
            )
          )
      )
    )
  );

  delete$: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.DELETE),
      map((action: fromActions.Delete) => action.id),
      switchMap((id) =>
        this.httpClient
          .delete<TagResponseAPI>(
            `http://localhost:8080/api/post/etiquetas/${id}`
          )
          .pipe(
            map((tag: TagResponseAPI) => {
              this.notification.success(tag.message);
              return new fromActions.UpdateSuccess(tag.response);
            }),
            catchError((err) =>
              of(new fromActions.UpdateError(err.error.message))
            )
          )
      )
    )
  );
}

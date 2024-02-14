import { Action } from '@ngrx/store';
import { CategoryRequest, CategoryResponse } from './category.models';

export enum Types {
  CREATE = 'Category Create: Start',
  CREATE_SUCCESS = 'Category Create: Success',
  CREATE_ERROR = 'Category Create: Error',

  READ = 'Category Read: Start',
  READ_SUCCESS = 'Category Read: Success',
  READ_ERROR = 'Category Read: Error',

  READ_BY_ID = 'Category Read by Id: Start',
  READ_BY_ID_SUCCESS = 'Category Read by Id: Success',
  READ_BY_ID_ERROR = 'Category Read by Id: Error',

  UPDATE = 'Category Update: Start',
  UPDATE_SUCCESS = 'Category Update: Success',
  UPDATE_ERROR = 'Category Update: Error',

  DELETE = 'Category Delete: Start',
  DELETE_SUCCESS = 'Category Delete: Success',
  DELETE_ERROR = 'Category Delete: Error',
}

export class Create implements Action {
  readonly type = Types.CREATE;
  constructor(public category: CategoryRequest) {}
}

export class CreateSuccess implements Action {
  readonly type = Types.CREATE_SUCCESS;
  constructor(public category: CategoryResponse) {}
}

export class CreateError implements Action {
  readonly type = Types.CREATE_ERROR;
  constructor(public error: string) {}
}

export class Read implements Action {
  readonly type = Types.READ;
  constructor() {}
}

export class ReadSuccess implements Action {
  readonly type = Types.READ_SUCCESS;
  constructor(public categories: CategoryResponse[]) {}
}

export class ReadError implements Action {
  readonly type = Types.READ_ERROR;
  constructor(public error: string) {}
}

export class ReadById implements Action {
  readonly type = Types.READ_BY_ID;
  constructor(public id: number) {}
}

export class ReadByIdSuccess implements Action {
  readonly type = Types.READ_BY_ID_SUCCESS;
  constructor(public category: CategoryResponse) {}
}

export class ReadByIdError implements Action {
  readonly type = Types.READ_BY_ID_ERROR;
  constructor(public error: string) {}
}

export class Update implements Action {
  readonly type = Types.UPDATE;
  constructor(public id: number, public category: CategoryRequest) {}
}

export class UpdateSuccess implements Action {
  readonly type = Types.UPDATE_SUCCESS;
  constructor(public category: CategoryResponse) {}
}

export class UpdateError implements Action {
  readonly type = Types.UPDATE_ERROR;
  constructor(public error: string) {}
}

export class Delete implements Action {
  readonly type = Types.DELETE;
  constructor(public id: number) {}
}

export class DeleteSuccess implements Action {
  readonly type = Types.DELETE_SUCCESS;
  constructor(public category: CategoryResponse) {}
}

export class DeleteError implements Action {
  readonly type = Types.DELETE_ERROR;
  constructor(public error: string) {}
}

export type All =
  | Create
  | CreateSuccess
  | CreateError
  | Read
  | ReadSuccess
  | ReadError
  | ReadById
  | ReadByIdSuccess
  | ReadByIdError
  | Update
  | UpdateSuccess
  | UpdateError
  | Delete
  | DeleteSuccess
  | DeleteError;

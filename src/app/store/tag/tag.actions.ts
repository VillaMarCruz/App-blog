import { Action } from '@ngrx/store';
import { TagRequest, TagResponse } from './tag.models';

export enum Types {
  CREATE = 'Tag Create: Start',
  CREATE_SUCCESS = 'Tag Create: Success',
  CREATE_ERROR = 'Tag Create: Error',

  READ = 'Tag Read: Start',
  READ_SUCCESS = 'Tag Read: Success',
  READ_ERROR = 'Tag Read: Error',

  READ_BY_ID = 'Tag Read by Id: Start',
  READ_BY_ID_SUCCESS = 'Tag Read by Id: Success',
  READ_BY_ID_ERROR = 'Tag Read by Id: Error',

  UPDATE = 'Tag Update: Start',
  UPDATE_SUCCESS = 'Tag Update: Success',
  UPDATE_ERROR = 'Tag Update: Error',

  DELETE = 'Tag Delete: Start',
  DELETE_SUCCESS = 'Tag Delete: Success',
  DELETE_ERROR = 'Tag Delete: Error',
}

export class Create implements Action {
  readonly type = Types.CREATE;
  constructor(public tag: TagRequest) {}
}

export class CreateSuccess implements Action {
  readonly type = Types.CREATE_SUCCESS;
  constructor(public tag: TagResponse) {}
}

export class CreateError implements Action {
  readonly type = Types.CREATE_ERROR;
  constructor(public error: string) {}
}

export class Update implements Action {
  readonly type = Types.UPDATE;
  constructor(public id: number, public tag: TagRequest) {}
}

export class UpdateSuccess implements Action {
  readonly type = Types.UPDATE_SUCCESS;
  constructor(public tag: TagResponse) {}
}

export class UpdateError implements Action {
  readonly type = Types.UPDATE_ERROR;
  constructor(public error: string) {}
}

export class Read implements Action {
  readonly type = Types.READ;
  constructor() {}
}

export class ReadSuccess implements Action {
  readonly type = Types.READ_SUCCESS;
  constructor(public tags: TagResponse[]) {}
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
  constructor(public tag: TagResponse) {}
}

export class ReadByIdError implements Action {
  readonly type = Types.READ_BY_ID_ERROR;
  constructor(public error: string) {}
}

export class Delete implements Action {
  readonly type = Types.DELETE;
  constructor(public id: number) {}
}

export class DeleteSuccess implements Action {
  readonly type = Types.DELETE_SUCCESS;
  constructor(public tag: TagResponse) {}
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

import { Action } from "@ngrx/store";

import { UsernamePasswordCredentials, UserCreateRequest, UserResponse } from "./user.models";

export enum Types {

  INIT = '[User] Init: Start',
  INIT_AUTHORIZED = '[User] Init: Authorized',
  INIT_UNAUTHORIZED = '[User] Init: UnAuthorized',
  INIT_ERROR = '[User] Init: Error',

  SIGIN_IN_EMAIL = '[User] Login: Start',
  SIGIN_IN_EMAIL_SUCCESS = '[User] Login: Success',
  SIGIN_IN_EMAIL_ERROR = '[User] Login: Error',

  SIGN_UP_EMAIL = '[User] Registrar usuario: Start',
  SIGN_UP_EMAIL_SUCCESS = '[User] Registrar usuario: Success',
  SIGN_UP_EMAIL_ERROR = '[User] Registrar usuario: Error',

  SIGIN_OUT_EMAIL = '[User] Logout: Start',
  SIGIN_OUT_EMAIL_SUCCESS = '[User] Logout: Success',
  SIGIN_OUT_EMAIL_ERROR = '[User] Logout: Error',

}

//INIT -> EL USUARIO ESTA EN SESION?
export class Init implements Action{
  readonly type = Types.INIT;
  constructor(){}
}

export class InitAuthorized implements Action{
  readonly type = Types.INIT_AUTHORIZED;
  constructor(
    public user: UserResponse
  ){}
}

export class InitUnAuthorized implements Action{
  readonly type = Types.INIT_UNAUTHORIZED;
  constructor(){};
}

export class InitError implements Action{
  readonly type = Types.INIT_ERROR;
  constructor(public error: string){};
}

//LOGIN
export class SignInEmail implements Action {
  readonly type = Types.SIGIN_IN_EMAIL;
  constructor(
    public credentials: UsernamePasswordCredentials
  ){}
}

export class SignInEmailSuccess implements Action{
  readonly type = Types.SIGIN_IN_EMAIL_SUCCESS;
  constructor(
    public token: string
  ){}
}

export class SignInEmailError implements Action{
  readonly type = Types.SIGIN_IN_EMAIL_ERROR;
  constructor(
    public error: string
  ){}
}

//Salir de sesion o Logout
export class SignOut implements Action{
  readonly type = Types.SIGIN_OUT_EMAIL;
  constructor(){}
}

export class SignOutSuccess implements Action {
  readonly type = Types.SIGIN_OUT_EMAIL_SUCCESS;
  constructor(){}
}

export class SignOutError implements Action{
  readonly type = Types.SIGIN_OUT_EMAIL_ERROR;
  constructor(
    public error: string
  ){}
};

export type All =
            Init | InitAuthorized | InitUnAuthorized | InitError
          | SignInEmail | SignInEmailSuccess | SignInEmailError
          | SignOut | SignOutSuccess | SignOutError;


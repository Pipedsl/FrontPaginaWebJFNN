import { Action } from "@ngrx/store";
import { EmailPasswordCredentials, UserCreateRequest, UserResponse } from "./user.models";

export enum Types {
  INIT = '[User] Init: Start',
  INIT_AUTHORIZED = '[User] Init: Authorized',
  INIT_UNAUTHORIZED = '[User] Init: Unauthorized',
  INIT_ERROR = '[User] Init: Error',

  SIGNIN_IN_EMAIL = '[User] Login: Start',
  SIGNIN_IN_EMAIL_SUCCESS = '[User] Login: Success',
  SIGNIN_IN_EMAIL_ERROR = '[User] Login: Error',

  SIGN_UP_EMAIL = '[User] Registrar usuario con Email: Start',
  SIGN_UP_EMAIL_SUCCESS = '[User] Registrar usuario con Email: Success',
  SIGN_UP_EMAIL_ERROR = '[User] Registrar usuario con Email: Error',

  SIGNIN_OUT_EMAIL = '[User] Logout: Start',
  SIGNIN_OUT_EMAIL_SUCCESS = '[User] Logout: Success',
  SIGNIN_OUT_EMAIL_ERROR = '[User] Logout: Error',
}

//INIT -> EL USUARIO ESTA EN SESIÓN?
export class Init implements Action{
  readonly type = Types.INIT;
  constructor (){}
}

export class InitAuthorized implements Action {
  readonly type = Types.INIT_AUTHORIZED;
  constructor(public email: string, public user: UserResponse | null){}
}

export class InitUnauthorized implements Action {
  readonly type = Types.INIT_UNAUTHORIZED;
  constructor(){}
}

export class InitError implements Action {
  readonly type = Types.INIT_ERROR;
  constructor(public error: string){}
}

//LOGIN
export class SignInEmail implements Action {
  readonly type = Types.SIGNIN_IN_EMAIL;
  constructor(public credentials: EmailPasswordCredentials) {}
}

export class SignInEmailSuccess implements Action{
  readonly type = Types.SIGNIN_IN_EMAIL_SUCCESS;
  constructor(public email: string, public user: UserResponse){}
}

export class SignInEmailError implements Action{
  readonly type = Types.SIGNIN_IN_EMAIL_ERROR;
  constructor(public error: string){}
}

//SIGNUP O REGISTRO DE USUARIOS
export class SignUpEmail implements Action{
  readonly type = Types.SIGN_UP_EMAIL;
  constructor(public user: UserCreateRequest){}
}

export class SignUpEmailSuccess implements Action {
  readonly type = Types.SIGN_UP_EMAIL_SUCCESS;
  constructor(public email: string, public user: UserResponse | null){}
}

export class SignUpEmailError implements Action {
  readonly type = Types.SIGN_UP_EMAIL_ERROR;
  constructor( public error: string){}
}

//LOGOUT SALIR DE SESION
export class SignOut implements Action{
  readonly type = Types.SIGNIN_OUT_EMAIL;
  constructor(){}
}

export class SignOutSuccess implements Action{
  readonly type = Types.SIGNIN_OUT_EMAIL_SUCCESS;
  constructor(){}
}

export class SignOutError implements Action{
  readonly type = Types.SIGNIN_OUT_EMAIL_ERROR;
  constructor(public error: string){}
}

export type All =
        Init
      | InitAuthorized
      | InitUnauthorized
      | InitError
      | SignInEmail
      | SignInEmailSuccess
      | SignInEmailError
      | SignUpEmail
      | SignUpEmailSuccess
      | SignUpEmailError
      | SignOut
      | SignOutSuccess
      | SignOutError;

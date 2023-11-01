import { Action } from "@ngrx/store";
import { ContactoCreateRequest, ContactoResponse } from "./save.models";


export enum Types {
  CREATE = '[Contacto] Create: Start',
  CREATE_SUCCESS = '[Contacto] Create: Succcess',
  CREATE_ERROR = '[Contacto] Create: Error',

  READ = '[Contacto] Read',
  READ_SUCCESS = '[Contacto] Read:Success',
  READ_ERROR = '[Contacto] Read:Error',
}

export class Read implements Action{
  readonly type = Types.READ;
  constructor(){}
}

export class ReadSuccess implements Action{
  readonly type = Types.READ_SUCCESS;
  constructor(public contactos: ContactoResponse[]){}
}

export class ReadError implements Action {
  readonly type = Types.READ_ERROR;
  constructor(public error: string){}
}

export class Create implements Action {
  readonly type = Types.CREATE;
  constructor(public contacto: ContactoCreateRequest){}
}

export class CreateSuccess implements Action {
  readonly type = Types.CREATE_SUCCESS;
  constructor(public contacto: ContactoResponse){}
}

export class CreateError implements Action {
  readonly type = Types.CREATE_ERROR;
  constructor(public error: string){}
}

export type All =
Read
| ReadSuccess
| ReadError
|Create | CreateSuccess | CreateError;

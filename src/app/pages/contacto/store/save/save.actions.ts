import { Action } from "@ngrx/store";
import { ContactoCreateRequest, ContactoResponse } from "./save.models";


export enum Types {
  CREATE = '[Contacto] Create: Start',
  CREATE_SUCCESS = '[Contacto] Create: Succcess',
  CREATE_ERROR = '[Contacto] Create: Erro'
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

export type All = Create | CreateSuccess | CreateError;

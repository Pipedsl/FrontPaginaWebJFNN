import { Action } from "@ngrx/store";
import { CotizacionCreateRequest, CotizacionResponse } from "./save.models";

export enum Types {
  CREATE = '[Cotizacion] Create: Start',
  CREATE_SUCCESS = '[Cotizacion] Create: Succcess',
  CREATE_ERROR = '[Cotizacion] Create: Error',

  READ = '[Cotizacion] Read',
  READ_SUCCESS = '[Cotizacion] Read:Success',
  READ_ERROR = '[Cotizacion] Read:Error',
}

export class Read implements Action {
  readonly type = Types.READ;
  constructor(){}
}

export class ReadSuccess implements Action {
  readonly type = Types.READ_SUCCESS;
  constructor(public cotizaciones: CotizacionResponse[]){}
}

export class ReadError implements Action {
  readonly type = Types.READ_ERROR;
  constructor(public error: string){}
}

export class Create implements Action {
  readonly type = Types.CREATE;
  constructor(public cotizacion: CotizacionCreateRequest){}
}

export class CreateSuccess implements Action {
  readonly type = Types.CREATE_SUCCESS;
  constructor(public cotizacion: CotizacionResponse){}
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



import { Action } from "@ngrx/store";
import { CotizacionCreateRequest, CotizacionResponse } from "./save.models";

export enum Types {
  CREATE = '[Cotizacion] Create: Start',
  CREATE_SUCCESS = '[Cotizacion] Create: Succcess',
  CREATE_ERROR = '[Cotizacion] Create: Erro'
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

export type All = Create | CreateSuccess | CreateError;



import { ContactoResponse } from "./save.models";
import * as fromActions from './save.actions';

export interface ListState {
  contactos: ContactoResponse[] | null;
  contacto: ContactoResponse | null;
  loading: boolean | null;
  error: string | null;
}

export const initialState: ListState = {
  contactos: null,
  contacto: null,
  loading: null,
  error: null
}

export function reducer(state: ListState = initialState, action: fromActions.All | any) {

  switch(action.type){

    case fromActions.Types.CREATE: {
      return {...state, loading: true, error: null}
    }

    case fromActions.Types.CREATE_SUCCESS: {
      return {...state, loading: false, error: null, contacto: action.contacto}
    }

    case fromActions.Types.CREATE_ERROR: {
      return {...state, loading: false, error: action.error}
    }

        case fromActions.Types.READ:{
      return{...state, loading: true, error: null}
    }

    case fromActions.Types.READ_SUCCESS: {
      return{...state, loading: false, contactos: action.contactos}
    }

    case fromActions.Types.READ_ERROR: {
      return{...state, loading:false, error: action.error}
    }

    default: {
      return state;
    }
  }
}

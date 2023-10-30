import * as fromList from './save/save.reducer';
import { SaveEffects } from './save/save.effects';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';


export interface ContactoState {
  list: fromList.ListState;
}

export const reducers : ActionReducerMap<ContactoState> = {
  list: fromList.reducer
}

export const effects : any = [
  SaveEffects
]

export const getContactoState = createFeatureSelector<ContactoState>('contacto');

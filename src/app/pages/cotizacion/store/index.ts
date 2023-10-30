import * as fromList from './save/save.reducer';
import { SaveEffects } from './save/save.effects';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';


export interface CotizacionState {
  list: fromList.ListState;
}

export const reducers : ActionReducerMap<CotizacionState> = {
  list: fromList.reducer
}

export const effects : any = [
  SaveEffects
]

export const getCotizacionState = createFeatureSelector<CotizacionState>('cotizacion');

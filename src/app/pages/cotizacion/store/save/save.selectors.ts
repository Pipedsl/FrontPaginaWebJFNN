import { createSelector } from "@ngrx/store";
import { getCotizacionState, CotizacionState } from '../index';

import { ListState } from "./save.reducer";


export const getListState = createSelector(
  getCotizacionState,
  (state: CotizacionState ) => state.list
)

export const getLoading = createSelector(
  getListState,
  (state: ListState) => state.loading
)

export const getCotizaciones = createSelector(
  getListState,
  (state: ListState) => state.cotizaciones
)

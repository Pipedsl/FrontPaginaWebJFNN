import { createSelector } from "@ngrx/store";
import { getContactoState, ContactoState } from '../index';

import { ListState } from "./save.reducer";


export const getListState = createSelector(
  getContactoState,
  (state: ContactoState ) => state.list
)

export const getLoading = createSelector(
  getListState,
  (state: ListState) => state.loading
)

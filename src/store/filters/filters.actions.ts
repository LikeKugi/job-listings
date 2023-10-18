import { FiltersConstants } from '@/store/filters/filters.constants';
import { IAction } from '@/types/storeTypes';

export const addFilter = (filter: string): IAction<string> => ({
  type: FiltersConstants.ADD_FILTER,
  payload: filter,
})

export const removeFilter = (filter: string): IAction<string> => ({
  type: FiltersConstants.REMOVE_FILTER,
  payload: filter,
})

export const clearFilter = (): IAction<null> => ({
  type: FiltersConstants.CLEAR_FILTER,
  payload: null
})

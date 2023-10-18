import { FiltersConstants } from '@/store/filters/filters.constants';
import { IAction } from '@/types/storeTypes';

export const addFilter = (filter: string): IAction => ({
  type: FiltersConstants.ADD_FILTER,
  payload: filter,
})

export const removeFilter = (filter: string): IAction => ({
  type: FiltersConstants.REMOVE_FILTER,
  payload: filter,
})

export const clearFilter = (): IAction => ({
  type: FiltersConstants.CLEAR_FILTER,
  payload: null
})

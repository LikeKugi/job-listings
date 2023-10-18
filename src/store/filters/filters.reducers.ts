import { IAction } from '@/types/storeTypes';
import { FiltersConstants } from '@/store/filters/filters.constants';

export const filterReducer = (state: string[] = [], action: IAction<string | null>) => {
  switch (action.type) {
    case FiltersConstants.ADD_FILTER: {
      const filters = new Set();
      state.forEach(el => filters.add(el));
      filters.add(action.payload)
      return [...filters];
    }
    case FiltersConstants.REMOVE_FILTER:
      return state.filter(el => el !== action.payload);
    case FiltersConstants.CLEAR_FILTER:
      return [];
    default:
      return state
  }
}

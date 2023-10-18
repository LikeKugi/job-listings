import { combineReducers } from 'redux';
import { positionReducer } from '@/store/positions/positions.reducer';
import { filterReducer } from '@/store/filters/filters.reducers';

export const RootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
})

import { combineReducers } from 'redux';
import { positionReducer } from '@/store/positions/positions.reducer';

export const RootReducer = combineReducers({
  positions: positionReducer,
})

export type RootState = ReturnType<typeof RootReducer>

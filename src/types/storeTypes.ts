import { PositionConstants } from '@/store/positions/position.constants';
import { FiltersConstants } from '@/store/filters/filters.constants';

export type PayloadAction<T> = T

export interface IAction<T> {
  type: PositionConstants | FiltersConstants,
  payload: PayloadAction<T>
}

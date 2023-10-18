import { PositionConstants } from '@/store/positions/position.constants';
import { IDataJob } from '@/types/IDataJob';
import { FiltersConstants } from '@/store/filters/filters.constants';

export interface IAction {
  type: PositionConstants | FiltersConstants,
  payload: string | string[] | IDataJob[] | null
}

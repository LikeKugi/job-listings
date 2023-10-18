import { PositionConstants } from '@/store/positions/position.constants';
import { IDataJob } from '@/types/IDataJob';
import { IAction } from '@/types/storeTypes';


export const addPositions = (positions: IDataJob[]): IAction<IDataJob[]> => ({
  type: PositionConstants.ADD_POSITIONS,
  payload: positions,
})

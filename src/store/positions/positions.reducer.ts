import { IAction } from '@/types/storeTypes';
import { PositionConstants } from '@/store/positions/position.constants';
import { IDataJob } from '@/types/IDataJob';

export const positionReducer = (state: IDataJob[] = [], action: IAction<IDataJob[]>) => {
  switch (action.type) {
    case PositionConstants.ADD_POSITIONS:
      return action.payload;
    default:
      return state;
  }
}

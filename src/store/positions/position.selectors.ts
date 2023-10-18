import { RootState } from '@/store/store';
import { IDataJob } from '@/types/IDataJob';


export const selectAllPositions = (state: RootState) => state.positions;

export const selectVisiblePosition = (state: RootState, filters:string[] = []) => {
  if (!filters.length) {
    return state.positions;
  }
  return (state.positions as IDataJob[]).filter((position: IDataJob) => {
    const posFilters = [position.role, position.level, position.contract, ...position.languages, ...position.tools];
    return filters.every(el => posFilters.includes(el));
  })
}

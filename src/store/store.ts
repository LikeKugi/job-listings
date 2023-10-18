import { createStore } from 'redux';
import { RootReducer} from '@/store/reducers/RootReducer';

export const store = createStore(RootReducer )

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

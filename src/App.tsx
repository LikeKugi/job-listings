import './App.css';
import Root from '@/components/layout/Root/Root';
import { useAppDispatch } from '@/store/hooks';
import { useEffect } from 'react';
import { addPositions } from '@/store/positions/position.actions';
import data from '@/assets/data.json';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addPositions(data));
  }, [dispatch]);

  return (
    <>
      <Root/>
    </>
  );
}

export default App;

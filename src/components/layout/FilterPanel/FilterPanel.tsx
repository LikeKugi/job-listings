import { JSX } from 'react';

import styles from './FilterPanel.module.scss';
import Card from '@/components/common/Card/Card';
import Stack from '@/components/common/Stack/Stack';
import Badge from '@/components/common/Badge/Badge';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectFilters } from '@/store/filters/filters.selectors';
import { clearFilter, removeFilter } from '@/store/filters/filters.actions';

const FilterPanel = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters) as string[];

  const clearHandler = (filter: string) => {
    dispatch(removeFilter(filter))
  }

  const clearFiltersHandler = () => {
    dispatch(clearFilter())
  }

  if (!filters.length) return <></>

  return (
    <Card className={styles.filter}>
      <div className={styles.filter__wrapper}>
        <Stack pos="center">
          {filters.map(item => (<Badge variant="clearable" key={item} onClear={() => clearHandler(item)}>{item}</Badge>))}
        </Stack>

        <button className={styles.filter__btn} onClick={clearFiltersHandler}>Clear</button>
      </div>
    </Card>
  );
};
export default FilterPanel;

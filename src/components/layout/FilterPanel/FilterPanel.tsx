import { JSX } from 'react';

import styles from './FilterPanel.module.scss';
import Card from '@/components/common/Card/Card';
import Stack from '@/components/common/Stack/Stack';
import Badge from '@/components/common/Badge/Badge';

const FilterPanel = (): JSX.Element => {
  return (
    <Card className={styles.filter}>
      <div className={styles.filter__wrapper}>
        <Stack pos="center">
          <Badge variant="clearable" >Frontend</Badge>
          <Badge variant="clearable" >Backend</Badge>
          <Badge variant="clearable" >React</Badge>
        </Stack>

        <button className={styles.filter__btn}>Clear</button>
      </div>
    </Card>
  );
};
export default FilterPanel;

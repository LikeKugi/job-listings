import { JSX } from 'react';
import styles from './JobList.module.scss';
import JobItem from '@/components/common/JobItem/JobItem';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectVisiblePosition } from '@/store/positions/position.selectors';
import { IDataJob } from '@/types/IDataJob';
import { addFilter } from '@/store/filters/filters.actions';
import { selectFilters } from '@/store/filters/filters.selectors';

const JobList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters) as  string[];
  const data = useAppSelector((state) => selectVisiblePosition(state, filters)) as IDataJob[];

  const addFilterHandler = (filter: string) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className={styles.list}>
      {data.map((el: IDataJob) => (<JobItem id={el.id}
                                            company={el.company}
                                            logo={el.logo}
                                            new={el.new}
                                            featured={el.featured}
                                            position={el.position}
                                            role={el.role}
                                            level={el.level}
                                            postedAt={el.postedAt}
                                            contract={el.contract}
                                            location={el.location}
                                            languages={el.languages}
                                            tools={el.tools}
                                            key={el.id}
                                            badgeClickHandler={addFilterHandler}/>))}
    </div>
  );
};
export default JobList;

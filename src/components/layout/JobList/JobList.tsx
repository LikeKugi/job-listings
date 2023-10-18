import { JSX } from 'react';
import styles from './JobList.module.scss';
import JobItem from '@/components/common/JobItem/JobItem';
import { useAppSelector } from '@/store/hooks';
import { selectAllPositions } from '@/store/positions/position.selectors';
import { IDataJob } from '@/types/IDataJob';

const JobList = (): JSX.Element => {
  const data = useAppSelector(selectAllPositions) as IDataJob[]
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
                                            key={el.id}/>))}
    </div>
  );
};
export default JobList;

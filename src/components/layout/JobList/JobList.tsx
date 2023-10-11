import { JSX } from 'react';
import styles from './JobList.module.scss';
import data from '@assets/data.json';
import JobItem from '@common/JobItem/JobItem';

const JobList = (): JSX.Element => {
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

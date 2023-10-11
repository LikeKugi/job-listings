import { JSX } from 'react';
import Header from '@common/Header/Header';
import styles from './Root.module.scss';
import Footer from '@layout/Footer/Footer';
import Container from '@common/Container/Container';
import FilterPanel from '@layout/FilterPanel/FilterPanel';
import JobList from '@layout/JobList/JobList';

const Root = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.root__content}>
        <Container>
          <FilterPanel />
          <JobList />
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default Root;

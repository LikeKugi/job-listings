import { JSX } from 'react';
import styles from './Root.module.scss';
import Header from '@/components/common/Header/Header';
import Container from '@/components/common/Container/Container';
import FilterPanel from '@/components/layout/FilterPanel/FilterPanel';
import JobList from '@/components/layout/JobList/JobList';
import Footer from '@/components/layout/Footer/Footer';

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

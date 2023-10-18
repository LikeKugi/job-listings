import { JSX } from 'react';
import styles from './Footer.module.scss'
import Container from '@/components/common/Container/Container';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Container>
        <nav className={styles.footer__nav}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}><a className={styles.footer__link} href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt/hub" target={'_blank'}>Task</a></li>
            <li className={styles.footer__item}><a className={styles.footer__link} href="https://github.com/LikeKugi" target={'_blank'}>GitHub Profile</a></li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
};
export default Footer;

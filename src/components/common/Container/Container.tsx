import { FC, JSX, ReactNode } from 'react';
import styles from './Container.module.scss'

interface IContainerProps {
  children: ReactNode | string
}

const Container: FC<IContainerProps> = ({children}): JSX.Element => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};
export default Container;

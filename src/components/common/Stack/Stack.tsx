import { FC, JSX, ReactNode } from 'react';
import styles from './Stack.module.scss';

interface IStackProps {
  children: ReactNode | string,
  pos: 'center' | 'start' | 'end'
}

const Stack: FC<IStackProps> = ({pos, children}): JSX.Element => {
  return (
    <div className={`${styles.stack} ${styles[pos]}`}>
      {children}
    </div>
  );
};
export default Stack;

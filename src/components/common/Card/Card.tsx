import { FC, JSX, ReactNode } from 'react';
import styles from './Card.module.scss';

interface ICardProps {
  children: string | ReactNode,
  isFeatured?: boolean,
  className?: string,
}

const Card: FC<ICardProps> = ({children, isFeatured, className}): JSX.Element => {
  return (
    <div
      className={`${styles.card} ${isFeatured && styles.featured} ${className || ''}`}
    >
      {children}
    </div>
  );
};
export default Card;

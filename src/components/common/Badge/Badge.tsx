import { FC, JSX, ReactNode } from 'react';
import styles from './Badge.module.scss';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as Remove } from "@/assets/images/icon-remove.svg";

interface IBadgeProps {
  variant: BadgeVariantTypes,
  colorScheme?: ColorSchemeType,
  children: string | ReactNode,
  onClear?: () => void,
  onClick?: () => void,
}

const Badge: FC<IBadgeProps> = ({ variant, colorScheme, children, onClick, onClear }): JSX.Element => {
  return (
    <div className={`${styles.badge} ${styles[variant]} ${colorScheme && styles[colorScheme]}`} onClick={onClick}>
      <span className={styles.badge__text}>
        {children}
      </span>
      {variant === 'clearable' && (
        <button className={styles.badge__remover} onClick={onClear}>
          <Remove />
        </button>
      )}
    </div>
  );
};
export default Badge;

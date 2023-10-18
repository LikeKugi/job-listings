import { FC, JSX } from 'react';
import styles from './JobItem.module.scss';
import Stack from '@/components/common/Stack/Stack';
import Badge from '@/components/common/Badge/Badge';
import Card from '@/components/common/Card/Card';
import { IDataJob } from '@/types/IDataJob';

interface IJobItemProps extends IDataJob{}

const JobItem: FC<IJobItemProps> = ({
                                      new: isNew,
                                      company,
                                      featured: isFeatured,
                                      contract,
                                      languages,
                                      level,
                                      logo,
                                      location,
                                      tools,
                                      position,
                                      role,
                                      postedAt,
                                      id,
                                    }): JSX.Element => {
  const badges = [role, level, ...languages, ...tools];
  return (
    <Card isFeatured={isFeatured} key={id}>
      <div className={styles.item}>
        <div className={styles.item__info}>
          <img
            className={styles.item__avatar}
            src={logo}
            alt={company}
          />
          <div className={styles.item__body}>
            <div className={styles.company}>
              <h3 className={styles.company__title}>{company}</h3>
              {(isNew || isFeatured) && (
                <Stack pos="start">
                  {isNew && (
                    <Badge variant="rounded"
                           colorScheme="primary">
                      NEW!
                    </Badge>
                  )}
                  {isFeatured && (
                    <Badge variant="rounded"
                           colorScheme="dark">
                      FEATURED
                    </Badge>
                  )}
                </Stack>
              )}
            </div>
            <h2 className={styles.item__title}>
              {position}
            </h2>
            <Stack pos="end">
              <div className={styles.item__meta}>
                {postedAt}
              </div>
              <div className={styles.item__meta}>
                {contract}
              </div>
              <div className={styles.item__meta}>
                {location}
              </div>
            </Stack>
          </div>
        </div>
        <Stack pos="start">
          {badges.map(item => (
            <Badge key={item} variant="basic">{item}</Badge>
          ))}
        </Stack>
      </div>
    </Card>
  );
};
export default JobItem;

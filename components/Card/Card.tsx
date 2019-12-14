import React from 'react';
import styles from './Card.scss';
import classNames from 'classnames';
import Loading from '../Loading';

interface Props {
  title?: string;
  loading?: boolean;
  children: any;
  bodyStyle?: React.CSSProperties;
  action?: JSX.Element;
}

export default ({ title, children, loading, bodyStyle, action }: Props) => {
  return (
    <div className={styles.card}>
      {title && (
        <div className={styles.head}>
          <div className={styles.content}>
            <p>{title}</p>
            {action && action}
          </div>
        </div>
      )}
      <div
        className={classNames(styles.body, {
          [styles.noTitle]: !title,
        })}
      >
        {loading ? (
          <div className={styles.loadingContent}>
            <Loading color="#3a4557" loading={true} />
          </div>
        ) : (
          <div style={bodyStyle} className={styles.content}>{children}</div>
        )}
      </div>
    </div>
  );
};

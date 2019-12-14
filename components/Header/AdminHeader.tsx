import React from 'react';
import styles from './AdminHeader.scss';
import Link from 'next/link';

export default ({ title }: { title: string }) => {
  return (
    <div className={styles.header} style={{ padding: '0' }}>
      <div className={styles.content}>
        <div className={styles.backButton}>
          <Link href="/">
            <a>
            </a>
          </Link>
        </div>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

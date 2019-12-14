import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './Sidebar.scss';

export default () => {
  const route = useRouter();
  return (
    <div className={styles.adminSidebar}>
      <div className={styles.container}>
        <div className={styles.account}>
          <div className={styles.badge}>
            <div className={styles.profile}>
              <p className={styles.initials}>A</p>
            </div>
            <div className={styles.greet}>
              <p>Hey</p>
              <p>There</p>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <Link href="/">
            <a
              className={classNames(styles.item, {
                [styles.active]: route.route.includes('/') || route.route === '/',
              })}
            >
              <p>Lenders</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

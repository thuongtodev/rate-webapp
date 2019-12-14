import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.scss';
import { Icon } from 'semantic-ui-react';
import Drawer from 'react-motion-drawer';
import { useRouter } from 'next/router';

export default () => {
  const [drawerOpen, openDrawer] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.clientHeader}>
      <div className={styles.content}>
        <div className={styles.left}>
          <a className={styles.menu} onClick={() => openDrawer(true)}>
            <Icon name="sidebar" />
          </a>
        </div>
        <div className={styles.right}>
          <a type="question-circle" className={styles.question} />
        </div>
      </div>
      <Drawer
        onChange={() => openDrawer(!drawerOpen)}
        open={drawerOpen}
        drawerStyle={{ overflow: 'none' }}
      >
        <div className={styles.drawer}>
          <a className={styles.drawerClose} onClick={() => openDrawer(false)}>
            <Icon name="close" />
          </a>
          <ul className={styles.list}>
            <li>
              <Link href="/">
                <a onClick={() => openDrawer(false)}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/rates">
                <a onClick={() => openDrawer(false)}>Rates</a>
              </Link>
            </li>
            <li>
              <Link href="/apply">
                <a onClick={() => openDrawer(false)}>Apply</a>
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

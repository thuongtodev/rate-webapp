import React from 'react';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import styles from './Layout.scss';


export default ({ children }: { children: JSX.Element }) => {
  return (
    <div className={styles.adminLayout}>
      <AdminSidebar />
      <div className={styles.content}>
        <div>{children}</div>
      </div>
    </div>
  );
};

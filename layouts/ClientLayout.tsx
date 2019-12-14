import React from 'react';
import styles from './Layout.scss';
import ClientHeader from '../components/Header/ClientHeader';

interface Props {
  children: any;
}

export default ({ children }: Props) => {
  return (
    <div className={styles.clientLayout}>
      <ClientHeader />
      {children}
    </div>
  );
};

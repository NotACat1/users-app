import React, { FC } from 'react';
import UserList from '@components/UserList/UserList';
import styles from '@/styles.css';

const App: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>User Management</h1>
      <UserList />
    </div>
  );
};

export default App;

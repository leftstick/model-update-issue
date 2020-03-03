import React from 'react';

import {useModel} from 'umi'

import styles from './index.less';

export default () => {

  const {users} = useModel('userModel')

  return (
    <div>
      {
        users.map(user => {
        return <p key={user.name}>{user.name}</p>
        })
      }
    </div>
  );
}

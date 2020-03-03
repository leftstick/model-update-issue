import { useState, useEffect } from 'react';

export default function userModel() {
  const [users, setUsers] = useState<{name: string}>([]);

  useEffect(() => {
    setUsers([{ name: 'nanfeng' }, { name: 'dongfeng' }]);
  }, [setUsers]);

  return {
    users,
  };
}

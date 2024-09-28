// src/components/UserList.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../slices/userSlice';
import { endpoints } from '../config';
import { RootState } from '../store';

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`${endpoints.users}?page=1`);
      const data = await response.json();
      dispatch(setUsers(data.data));
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Users List</h2>
      {users.length > 0 ? (
        <ul className="list-disc pl-5">
          {users.map((user) => (
            <li key={user.id} className="py-2">
              {user.first_name} {user.last_name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;

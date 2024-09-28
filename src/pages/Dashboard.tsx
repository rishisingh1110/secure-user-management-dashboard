

import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import UserList from '../components/UserList';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      
      <UserList/>
      <button 
        onClick={handleLogout} 
        className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;



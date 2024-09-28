// src/components/AuthForm.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

interface AuthFormProps {
  type: 'login' | 'signup';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://reqres.in/api/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (type === 'login') {
          dispatch(login({ email, token: data.token })); 
          navigate('/dashboard'); 
        } else {
          alert('Signup successful! Please log in.');
          navigate('/'); 
        }
      } else {
        alert('Error: Unable to process request');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
      <div className="mb-4 flex flex-col items-center">
        <label htmlFor="email" className="block text-gray-700 text-center mb-1">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4 flex flex-col items-center">
        <label htmlFor="password" className="block text-gray-700 text-center mb-1">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="flex justify-center">
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition"
        >
          {type === 'login' ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;

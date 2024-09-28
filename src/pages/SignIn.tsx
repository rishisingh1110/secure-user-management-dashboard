// src/pages/SignIn.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <AuthForm type="login" />
      <p className="mt-4">
        Don't have an account?{' '}
        <button onClick={() => navigate('/signup')} className="text-blue-500 underline">
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default SignIn;

// src/pages/SignUp.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <AuthForm type="signup" />
      <p className="mt-4">
        Already have an account?{' '}
        <button 
          onClick={() => navigate('/')} 
          className="text-blue-500 underline"
        >
          Sign In
        </button>
      </p>
    </div>
  );
};

export default SignUp;

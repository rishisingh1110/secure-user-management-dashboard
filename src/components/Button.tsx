import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
    >
      {label}
    </button>
  );
};

export default Button;

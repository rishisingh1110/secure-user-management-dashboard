import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, type = 'text' }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default InputField;

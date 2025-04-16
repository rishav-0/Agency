import React from 'react'

const Input = ({ label, placeholder }) => {
  return (
    <div className="border-b-2 border-gray-300 focus-within:border-black  transition-all duration-200">
      <p className="text-sm text-gray-400 focus-within:font-bold focus-within:text-black transition-all duration-200">
        {label}
      </p>
      <input
        className="w-full outline-none bg-transparent font-semibold"
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};


export default Input
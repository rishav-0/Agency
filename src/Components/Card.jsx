import { Button } from '@material-tailwind/react';
import React from 'react';

const Card = ({ plan, selected, onSelect }) => {
  const { name, price, period, features, discount } = plan;

  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer rounded-lg shadow-lg p-4 flex flex-col items-center gap-2 transition-all ${
        selected ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <p className="font-semibold">{name}</p>
      <p className="text-xl">
        {price} <span className="text-xs">{period}</span>
      </p>

      <div className="mb-4 flex flex-col gap-2 text-xs">
        {features.map((f, idx) => (
          <p className='text-nowrap' key={idx}>✔️ {f}</p>
        ))}
      </div>

      <button
        className={`mb-2 text-xs font-semibold rounded-full py-1 px-2 ${
          selected ? 'bg-white text-black' : 'bg-gray-300'
        }`}
      >
        {discount}
      </button>

      <Button
        className={`w-full capitalize text-sm ${
          selected ? 'bg-[#d6fa52] text-black' : 'bg-gray-600 text-white'
        }`}
      >
        Choose Plan
      </Button>
    </div>
  );
};

export default Card;

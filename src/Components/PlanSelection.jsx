import React, { useState } from 'react';
import Card from './Card'; // Your updated Card
import { Switch } from '@material-tailwind/react';
import { monthlyPlans, yearlyPlans } from '../utils';

// Mock plans


const PlanSelection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const plans = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <div className="p-6 pt-0">
      <div className="flex justify-center items-center gap-2 mb-6">
        <span className={`${!isYearly ? 'font-bold' : 'text-gray-500'}`}>Monthly</span>
        <Switch
          color="green"
          checked={isYearly}
          onChange={() => setIsYearly(!isYearly)}
        />
        <span className={`${isYearly ? 'font-bold' : 'text-gray-500'}`}>Yearly</span>
        <p className='rounded-full px-4 bg-yellow-700 font-semibold'>20% Save</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card
            key={index}
            plan={plan}
            selected={index === selectedIndex}
            onSelect={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanSelection;

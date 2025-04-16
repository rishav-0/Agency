import React, { useState } from 'react';
import { nav } from '../utils';
import { Button } from '@material-tailwind/react';

function Nav() {
  const [tab, setTab] = useState('Home');

  const handleScroll = (id) => {
    setTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="flex justify-between items-center flex-wrap mb-4 container mx-auto lg:px-20 pt-4">
        <p className="font-bold italic">Delta</p>
        <div className="flex gap-4">
          {nav.map((i) => (
            <button
              onClick={() => handleScroll(i)}
              key={i}
              className={`${
                tab === i ? 'border-b-2 border-black' : ''
              } cursor-pointer text-sm`}
            >
              {i}
            </button>
          ))}
        </div>
        <Button variant="text" className="rounded-none">
          Sign in
        </Button>
        <Button variant="outlined" className="rounded-none">
          Register
        </Button>
      </div>
    </div>
  );
}

export default Nav;

// TestimonialCard.jsx
import React from 'react';
import doublequotes from '../images/doublequotes.png'

const TestimonialCard = ({ testimonial }) => {
  const { companyLogo, text, name, position, avatar } = testimonial;

  return (
    <div className="bg-white shadow-md p-6 rounded-md flex flex-col gap-4 w-full max-w-sm">
      <img src={companyLogo} alt="company logo" className="w-14 " />
      <p className="text-sm text-gray-600">{text}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 mt-2">
        <img src={avatar} alt={name} className="w-10 h-10 border-2 border-black rounded-full" />
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-gray-500">{position}</p>
        </div>
        </div>
       <img src={doublequotes} alt="" />
      </div>
      
    </div>
  );
};

export default TestimonialCard;

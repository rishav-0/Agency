import React, { useState } from "react";
import {blogCards} from "../utils"; // adjust path as needed
import { Button } from "@material-tailwind/react";

const BlogCards = () => {
  const [activeCard, setActiveCard] = useState(blogCards[1].id);

  const handleClick = (id) => {
    setActiveCard(id === activeCard ? null : id); // toggle
  };

  return (
    <div className="flex gap-8 justify-center items-stretch flex-wrap">
      {blogCards.map((card) => {
        const isActive = activeCard === card.id;

        return (
          <div
            key={card.id}
            onClick={() => handleClick(card.id)}
            className={`transition-all duration-700 cursor-pointer rounded-lg shadow-md overflow-hidden ${
              isActive ? "w-[50%]" : "w-[20%]"
            } min-w-[250px] bg-white relative`}
            style={{
              backgroundImage: isActive ? `url(${card.image})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: isActive ? "white" : "black",
            }}
          >
            <div className={`p-6 ${isActive ? "bg-black/50 h-full" : ""}`}>
              <p className="text-xs mb-1 text-gray-500">{card.date}</p>
              <h3 className="font-semibold mb-2">{card.title}</h3>
              <p className="text-sm mb-4">{card.description}</p>
              <button
                className={`text-xs rounded-full px-4 py-1 font-semibold ${
                  isActive
                    ? "bg-[#d6fa52] text-black"
                    : " bg-transparent shadow-none"
                }`}
              >
                Read More <i className="fas fa-angle-right"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCards;

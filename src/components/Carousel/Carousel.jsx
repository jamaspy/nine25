import React from "react";
import { items } from "./data";
import Item from "./Item";
const Carousel = () => {
  return (
    <div className="w-full bg-gray-800 my-12 flex flex-col md:flex-row items-center justify-around p-4">
      {items.map((item, index) => (
        <Item title={item.title} key={index} description={item.description} />
      ))}
    </div>
  );
};

export default Carousel;

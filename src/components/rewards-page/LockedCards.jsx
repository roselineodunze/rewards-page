import React from "react";
import books from "../../assets/books.png";
import star from "../../assets/star.png";
import gift from "../../assets/gift.png";
import money from "../../assets/flying-money.png";


const LockedCards = ({ item }) => {
  const icons = {
    money,
    gift,
    books
  };
  const status = item.icon
  const icon = icons[status] 
  return (
    <div className="h-full rounded-xl flex flex-col items-center text-center justify-between ">
      <div className="h-14 w-14 rounded-lg bg-purple-100 flex justify-center items-center">
        <img src={icon} height={26} width={26} />
      </div>
      <p className="text-2xl text-gray-600 font-semibold">{item.title}</p>
      <p className="text-lg text-gray-500">{item.desc}</p>
      <div className="flex items-center  gap-2">
        <img src={star} height={24} width={24} />
        <p className="text-lg font-semibold text-purple-700">
          {item.points} pts
        </p>
      </div>
      <button className="h-14 bg-blue-100 rounded-xl text-white w-full text-xl">
        {item.status}
      </button>
    </div>
  );
};

export default LockedCards;

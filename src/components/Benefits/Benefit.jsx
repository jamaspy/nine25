import React from "react";
import SpendSVG from "../../assets/img_spend.svg";
import ManageSVG from "../../assets/img_manage.svg";
import InvestSVG from "../../assets/img_invest.svg";
import ComingSoonSVG from "../../assets/coming_soon.svg";
const Benefit = ({ title, paragraphs, key, isWide, isComingSoon }) => {
  const renderImage = () => {
    switch (title) {
      case "Spend":
        return <SpendSVG />;
      case "Manage":
        return <ManageSVG />;
      case "Invest":
        return <InvestSVG />;
      default:
        break;
    }
  };
  return (
    <div
      key={key}
      className={`${
        isWide ? "md:col-span-2" : "col-span-1"
      } bg-white overflow-hidden shadow-sm rounded-lg`}
    >
      <div
        className={`flex ${
          isWide ? "flex-col md:flex-row md:justify-between w-full" : "flex-col"
        }`}
      >
        {!isWide && (
          <div className="flex-1 flex items-center justify-center">
            {renderImage()}
          </div>
        )}
        <div className="flex-1 p-4 flex items-start justify-center flex-col">
          <p className="text-xl font-medium mb-4">{title}</p>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg mb-2">
              {paragraph}
            </p>
          ))}
          {/* <p className="text-secondary hover:text-hover-blue hover:cursor-pointer flex flex-row items-center justify-start">
            Read More <HiOutlineChevronRight className="ml-4" />
          </p> */}
        </div>
        {isWide && (
          <div className="flex-1 flex items-end justify-center">
            {renderImage()}
          </div>
        )}
      </div>
      {isComingSoon && (
        <div className="w-full bg-secondary py-8 px-4 relative">
          <p className="text-white w-2/3 ">
            Shop with Nine25 card & pay your bills with direct debit.
          </p>
          <div className="absolute lg:right-5 right-0 -top-12">
            <ComingSoonSVG />
          </div>
        </div>
      )}
    </div>
  );
};

export default Benefit;

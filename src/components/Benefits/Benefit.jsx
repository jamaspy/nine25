import React from "react";
import SpendSVG from "../../assets/img_spend.svg";
import ManageSVG from "../../assets/img_manage.svg";
import InvestSVG from "../../assets/img_invest.svg";
import ComingSoonSVG from "../../assets/coming_soon.svg";
const Benefit = ({
  title,
  subtitle,
  paragraphs,
  index,
  isWide,
  isComingSoon,
}) => {
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
      key={index}
      className={`${
        isWide ? "md:col-span-2" : "col-span-1"
      }  overflow-hidden shadow-sm rounded-lg pt-4`}
    >
      <div
        className={`flex ${
          isWide
            ? "flex-col-reverse md:flex-row md:justify-between w-full"
            : "flex-col"
        }`}
      >
        {!isWide && (
          <div className="flex-1 flex items-center justify-center xl:my-12 md:my-6 my-5">
            {renderImage()}
          </div>
        )}
        <div className="flex-1 xl:p-12 md:pl-6 md:pr-2 p-6 flex items-start justify-center flex-col">
          <p className="text-3xl font-bold mb-4">{title}</p>
          <p className="text-xl font-medium mb-4">{subtitle}</p>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-xl mb-2 font-normal">
              {paragraph}
            </p>
          ))}
          {/* <p className="text-secondary hover:text-hover-blue hover:cursor-pointer flex flex-row items-center justify-start font-semibold">
            Read More <HiOutlineChevronRight className="ml-4" />
          </p> */}
        </div>
        {isWide && (
          <div className="flex-1 flex items-end justify-center xl:my-12 md;my-8 md:pr-4">
            {renderImage()}
          </div>
        )}
      </div>
      {isComingSoon && (
        <div className="w-full bg-secondary py-8 px-4 relative">
          <p className="text-white w-2/3 font-medium text-lg">
            Shop with Nine25 card & pay your bills with direct debit.
          </p>
          <div className="absolute lg:-right-2 right-0 -top-12">
            <ComingSoonSVG />
          </div>
        </div>
      )}
    </div>
  );
};

export default Benefit;

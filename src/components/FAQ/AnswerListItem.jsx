import React from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
const AnswerListItem = ({ setterFn, showState, question, answer }) => {
  return (
    <div className="border-b w-3/4 mx-auto mt-8">
      <div
        onClick={() => setterFn(!showState)}
        className="flex flex-row justify-between items-center cursor-pointer"
      >
        <p className="font-semibold text-sm mb-3">{question}</p>
        {showState ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
      </div>
      {showState && <p className="mb-2 px-1">{answer}</p>}
    </div>
  );
};

export default AnswerListItem;

import React from "react";

import AnswerListItem from "./AnswerListItem";
const AnswerList = () => {
  const [showQuestion1, setShowQuestion1] = React.useState(false);
  const [showQuestion2, setShowQuestion2] = React.useState(false);
  const [showQuestion3, setShowQuestion3] = React.useState(false);

  const FAQList = [
    {
      question: "Velit ullamco anim nulla cillum reprehenderit nostrud aute.",
      answer:
        "Laboris laboris enim incididunt deserunt qui consequat tempor ut nulla eiusmod nisi voluptate. Nostrud elit ea occaecat consectetur consectetur minim adipisicing cupidatat id Lorem id magna officia reprehenderit. In aliqua sint sit labore quis veniam exercitation. Tempor velit eiusmod do consequat id proident aute qui non id tempor pariatur. Irure adipisicing duis deserunt aliquip dolore aliquip. Laboris ullamco Lorem cupidatat ullamco occaecat duis nisi irure cillum.",
      setterFn: setShowQuestion1,
      showState: showQuestion1,
    },
    {
      question:
        "Nulla cupidatat veniam in tempor ullamco commodo dolor reprehenderit est sit occaecat commodo.",
      answer:
        "Laboris laboris enim incididunt deserunt qui consequat tempor ut nulla eiusmod nisi voluptate. Nostrud elit ea occaecat consectetur consectetur minim adipisicing cupidatat id Lorem id magna officia reprehenderit. In aliqua sint sit labore quis veniam exercitation. Tempor velit eiusmod do consequat id proident aute qui non id tempor pariatur. Irure adipisicing duis deserunt aliquip dolore aliquip. Laboris ullamco Lorem cupidatat ullamco occaecat duis nisi irure cillum.",
      setterFn: setShowQuestion2,
      showState: showQuestion2,
    },
    {
      question: "Aliqua ullamco ea aute nulla duis ex in non sit.",
      answer:
        "Laboris laboris enim incididunt deserunt qui consequat tempor ut nulla eiusmod nisi voluptate. Nostrud elit ea occaecat consectetur consectetur minim adipisicing cupidatat id Lorem id magna officia reprehenderit. In aliqua sint sit labore quis veniam exercitation. Tempor velit eiusmod do consequat id proident aute qui non id tempor pariatur. Irure adipisicing duis deserunt aliquip dolore aliquip. Laboris ullamco Lorem cupidatat ullamco occaecat duis nisi irure cillum.",
      setterFn: setShowQuestion3,
      showState: showQuestion3,
    },
  ];
  const CreateList = () => {
    const List = FAQList.map((item, index) => (
      <AnswerListItem key={index} {...item} index={index} />
    ));
    return List;
  };
  return (
    <>
      <CreateList />
    </>
  );
};

export default AnswerList;

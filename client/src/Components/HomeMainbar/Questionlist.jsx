import React from "react";
import Questions from "./Questions";
const QuestionList = ({ questionsList }) => {
  return (
    <>
      {questionsList?.map((question, index) => (
        <Questions question={question} key={index} />
      )) }
    </>
  );
};

export default QuestionList;
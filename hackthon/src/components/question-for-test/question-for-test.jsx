import { useState } from "react";
import style from "./question-for-test.module.css";
import { Button } from "../button/button";

export const QuestionForTest = ({ currentQuest }) => {
  const [isAnswer, setAnswer] = useState(false);
  const [idAnswer, setIdAnswer] = useState(false);
  const trueAnswer = currentQuest.answer.id;
  console.log(trueAnswer);

  const onClickSendAnswer = () => {
    setAnswer(true);
  };

  if (isAnswer) {
    return null;
  }
  return (
    <div className={style.question}>
      <h3>{currentQuest?.question}</h3>
      {currentQuest?.options.map((option) => (
        <div key={option.id} className={style.input_form}>
          <input type="checkbox" id={option.id} />
          <label htmlFor={option.id}>{option.text}</label>
        </div>
      ))}
      <Button text="ответить" func={onClickSendAnswer}></Button>
    </div>
  );
};

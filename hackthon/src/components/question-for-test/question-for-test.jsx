import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "../button/button";
import style from "./question-for-test.module.css";

export const QuestionForTest = ({
  currentQuest,
  counter,
  setCounter,
  countStep,
  setCountStep,
}) => {
  const [isAnswer, setAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const trueAnswer = currentQuest.answer;

  const onClickCheckbox = (id, checked) => {
    if (checked) {
      setSelectedOption(id);
    } else {
      setSelectedOption(null);
    }
  };

  const onClickSendAnswer = () => {
    if (selectedOption === trueAnswer) {
      setCounter(counter + 1);
    }
    setAnswer(true);
    setCountStep(countStep + 1);
  };

  if (isAnswer) {
    return null;
  }

  return (
    <div className={style.question}>
      <h3 className={style.question_title}>{currentQuest?.question}</h3>
      <div className={style.input_form_wrapper}>
        {" "}
        {currentQuest?.options.map((option) => (
          <div key={option.id} className={style.input_form}>
            <input
              type="checkbox"
              id={option.id}
              onChange={({ target }) =>
                onClickCheckbox(target.id, target.checked)
              }
              disabled={selectedOption && selectedOption !== option.id}
            />
            <label htmlFor={option.id}>{option.text}</label>
          </div>
        ))}
      </div>
      <Button text="ответить" func={onClickSendAnswer}></Button>
    </div>
  );
};

QuestionForTest.propTypes = {
  currentQuest: PropTypes.object,
  counter: PropTypes.number,
  setCounter: PropTypes.func,
  countStep: PropTypes.number,
  setCountStep: PropTypes.func,
};

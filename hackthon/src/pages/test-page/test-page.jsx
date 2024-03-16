import { useState } from "react";
import { Layout, QuestionForTest } from "../../components";
import { technologyList } from "../../constants/questions-for-test/technology-list";
import style from "./test-page.module.css";
import {
  questionsForCSS,
  questionsForHTML,
  questionsForJS,
  questionsForREACT,
  questionsForREDUX,
} from "../../constants";

export const TestPage = () => {
  const [currentQuestions, setCurrentQuestions] = useState(false);
  const allQuestions = [
    questionsForHTML,
    questionsForCSS,
    questionsForJS,
    questionsForREACT,
    questionsForREDUX,
  ];
  const [counters, setCounters] = {
    counterHTML: 0,
    counterCSS: 0,
    counterJS: 0,
    counterREACT: 0,
    counterREDUX: 0,
  };

  const onClick = (id) => {
    setCurrentQuestions(allQuestions[id]);
  };

  return (
    <>
      <Layout>
        <div className={style.testPage}>
          <h2>На знание какой технологии хотите пройти тест?</h2>
          {technologyList.map(({ id, name }) => (
            <li key={id} id={id} onClick={({ target }) => onClick(target.id)}>
              {name}
            </li>
          ))}
          <div>
            {" "}
            {currentQuestions &&
              currentQuestions.map((question) => (
                <QuestionForTest
                  key={question.id}
                  currentQuest={question}
                  counters={counters}
                />
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

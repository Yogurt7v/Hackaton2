import { useEffect, useState } from "react";
import { Button, Layout, QuestionForTest } from "../../components";
import { technologyList } from "../../constants/questions-for-test/technology-list";
import style from "./test-page.module.css";
import {
  questionsForCSS,
  questionsForHTML,
  questionsForJS,
  questionsForREACT,
  questionsForREDUX,
} from "../../constants";
import { Link, Outlet } from "react-router-dom";

export const TestPage = () => {
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const allQuestions = [
    questionsForHTML,
    questionsForCSS,
    questionsForJS,
    questionsForREACT,
    questionsForREDUX,
  ];
  const [counter, setCounter] = useState(0);
  const [countStep, setCountStep] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    console.log("counter", counter);
    console.log("countStep", countStep);
  }),
    [counter];

  const onClick = (id) => {
    console.log(id);
    setCurrentQuestions(allQuestions[id]);
  };

  return (
    <>
      <Layout>
        {countStep !== 3 ? (
          <div className={style.testPage}>
            {start ? (
              <div>
                {currentQuestions.map((question) => (
                  <QuestionForTest
                    key={question.id}
                    currentQuest={question}
                    counter={counter}
                    setCounter={setCounter}
                    countStep={countStep}
                    setCountStep={setCountStep}
                  />
                ))}
              </div>
            ) : (
              <>
                <h2 className={style.testPage_title}>
                  На знание какой технологии хотите пройти тест?
                </h2>
                <div className={style.technologyList}>
                  {" "}
                  {technologyList.map(({ id, name }) => (
                    <button
                      className={style.technologyList_item}
                      key={id}
                      id={id}
                      disabled={currentQuestions.length !== 0}
                      onClick={({ target }) => onClick(target.id)}
                    >
                      {name}
                    </button>
                  ))}
                </div>
                <Button
                  text={"Начать тест"}
                  func={() => setStart(true)}
                  disabled={currentQuestions.length === 0}
                ></Button>
              </>
            )}
          </div>
        ) : (
          <div className={style.the_end_test}>
            {" "}
            Тест закончен. <Link to="testResult">Посмотреть результаты</Link>
          </div>
        )}
      </Layout>

      <Outlet context={counter} />
    </>
  );
};

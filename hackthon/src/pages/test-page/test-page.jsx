import { useState } from "react";
import { Button, Layout, QuestionForTest } from "../../components";
import { technologyList } from "../../constants/questions-for-test/technology-list";
import {
  questionsForCSS,
  questionsForHTML,
  questionsForJS,
  questionsForReact,
  questionsForRedux,
} from "../../constants";
import { Link, Outlet } from "react-router-dom";
import style from "./test-page.module.css";

export const TestPage = () => {
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const allQuestions = [
    questionsForHTML,
    questionsForCSS,
    questionsForJS,
    questionsForReact,
    questionsForRedux,
  ];

  const [counter, setCounter] = useState(0);
  const [countStep, setCountStep] = useState(0);
  const [start, setStart] = useState(false);
  const [technologyName, setTechnologyName] = useState(null);

  const onClick = (id) => {
    const nameFound = technologyList.find(
      (technology) => technology.id === Number(id)
    ).name;

    setCurrentQuestions(allQuestions[id]);
    setTechnologyName(nameFound);
  };

  const resetTest = () => {
    setCurrentQuestions([]);
    setCounter(0);
    setStart(false);
    setTechnologyName(null);
    setCountStep(0);
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
                    resetTest={resetTest}
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
                      disabled={currentQuestions?.length !== 0}
                      onClick={({ target }) => onClick(target.id)}
                    >
                      {name}
                    </button>
                  ))}
                </div>
                <Button
                  text={"Начать тест"}
                  func={() => setStart(true)}
                  disabled={currentQuestions?.length === 0}
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

      <Outlet context={[technologyName, counter]} />
    </>
  );
};

import { useOutletContext } from "react-router-dom";
import { Button, Layout, ProgressBar } from "../../components";
import { getRandomColor } from "../../utils";
import style from "./test-result.module.css";

export const TestResult = () => {
  const counter = useOutletContext();

  return (
    <>
      <Layout>
        <div className={style.test_result}>
          <ProgressBar
            skillInfo={counter}
            color={getRandomColor()}
            type="circle"
          />
          <Button text={"Пройти тест на знание другой технологии"}></Button>
        </div>
      </Layout>
    </>
  );
};

import { useOutletContext } from "react-router-dom";
import { Layout, ProgressBar } from "../../components";
import { getRandomColor } from "../../utils";

export const TestResult = () => {
  const counter = useOutletContext();

  return (
    <>
      <Layout>
        <ProgressBar skillInfo={counter} color={getRandomColor()} type="circle"/>
      </Layout>
    </>
  );
};

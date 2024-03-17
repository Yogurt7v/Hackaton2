import { useOutletContext } from "react-router-dom";
import { Layout } from "../../components";

export const TestResult = () => {
  const counter = useOutletContext();
  return (
    <>
      <Layout>
        <div>Ваш результат: {counter}</div>
      </Layout>
    </>
  );
};

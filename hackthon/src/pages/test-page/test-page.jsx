import { Layout } from "../../components";
import style from "./test-page.module.css";

export const TestPage = () => {
  return (
    <>
      <Layout></Layout>
      <div className={style.testPage}>Тест</div>
    </>
  );
};

import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import style from "./layout.module.css";
export const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Breadcrumbs />
      {children}
    </div>
  );
};
